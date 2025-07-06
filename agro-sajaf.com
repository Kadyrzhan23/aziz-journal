# 🔹 Основной сайт
server {
    server_name agro-sajaf.com www.agro-sajaf.com.com;

    root /var/www/cajaf/main/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/agro-sajaf.com-0001/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/agro-sajaf.com-0001/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

# 🔹 Админ-панель
server {
    listen 80;
    server_name admin.agro-sajaf.com.com;

    root /var/www/cajaf/admin/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}

# 🔹 API-сервер
server {
    server_name api.agro-sajaf.com;

    location /api {
        proxy_pass http://localhost:4445;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.agro-sajaf.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.agro-sajaf.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}






server {
    if ($host = agro-sajaf.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name agro-sajaf.com www.agro-sajaf.com.com;
    return 404; # managed by Certbot


}
server {
    if ($host = api.agro-sajaf.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name api.agro-sajaf.com;
    return 404; # managed by Certbot


}