FROM node:14.18.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
COPY . .
ADD index.js ./
CMD ["npm", "start"]