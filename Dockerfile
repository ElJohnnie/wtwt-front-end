FROM node:18.20.3 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.20.3 AS production-stage

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
# # CMD ["tail", "-f", "/dev/null"]
