envsubst '
    ${PP_VERSION}
    ${PP_API_BASE_URI}
' < /app/environment.template.js > /var/www/perfectpoint/public/environment.js

exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf
