FROM node:22-bookworm as base

WORKDIR /app

COPY ./package*.json ./
COPY ./public/ ./public
COPY ./src/ ./src/
COPY ./.eslintrc.json ./
COPY ./next.config.mjs ./
COPY ./tsconfig.json ./

RUN npm ci

FROM base AS build

RUN npm run build

FROM build AS prod

RUN set -eux && \
    apt update && \
    apt install -y gettext-base nginx logrotate supervisor

COPY ./docker/supervisor/ /etc/supervisor/
COPY ./docker/logrotate/ /etc/logrotate.d/
COPY ./docker/nginx/ /etc/nginx/

RUN nginx -t -v

RUN mkdir -p /var/www/perfectpoint/public
RUN mkdir -p /var/log/perfectpoint

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/src/environment.template.js /app/environment.template.js

RUN chmod -R 755 /var/log

COPY ./docker/start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]
