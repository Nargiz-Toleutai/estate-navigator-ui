FROM node:22-bookworm as base

WORKDIR /app

COPY ./package*.json ./
COPY ./public/ ./public
COPY ./src/ ./src/
COPY ./.eslintrc.json ./
COPY ./next.config.mjs ./
COPY ./README.md ./
COPY ./tsconfig.json ./

RUN npm ci

FROM base AS build

RUN npm run build

FROM base AS prod

RUN set -eux && \
    apt update && \
    apt install -y nginx logrotate supervisor

COPY ./docker/supervisor/ /etc/supervisor/
COPY ./docker/logrotate/ /etc/logrotate.d/
COPY ./docker/nginx/ /etc/nginx/

RUN nginx -t -v

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

RUN mkdir -p /var/log/perfectpoint

RUN chmod -R 755 /var/log

COPY ./docker/start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]
