FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

