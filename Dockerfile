FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV HOST=0.0.0.0
ENV PORT=80

RUN npm run build:amvera \
  && test -f /app/.output/server/index.mjs

EXPOSE 80
CMD ["node", "/app/.output/server/index.mjs"]
