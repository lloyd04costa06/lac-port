# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


# Production stage (NO nginx)
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

# copy build output
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]