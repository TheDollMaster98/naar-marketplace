# STEP 1: build Angular app
FROM node:24-alpine3.21 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build --configuration=production

# STEP 2: serve Angular con nginx
FROM nginx:1.29-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copia i file corretti dalla build Angular
COPY --from=build /app/dist/naar-marketplace/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
