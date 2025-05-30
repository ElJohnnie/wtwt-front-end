FROM node:18.20.3 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:18.20.3 AS production-stage

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bundle-size-plugin.mjs ./

EXPOSE 3000

CMD ["npm", "start"]