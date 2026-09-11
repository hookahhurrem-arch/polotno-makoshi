FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV PORT=80

RUN npm run build:amvera

EXPOSE 80
CMD ["node", ".output/server/index.mjs"]
