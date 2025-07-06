# 🔹 Основной сайт
server {
    server_name agromedscience.com www.agromedscience.com;

    root /var/www/aziz/main/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/agromedscience.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/agromedscience.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

# 🔹 Админ-панель
server {
    server_name admin.agromedscience.com;

    root /var/www/aziz/admin/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/admin.agromedscience.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/admin.agromedscience.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

# 🔹 API-сервер
server {
    server_name api.agromedscience.com;

    location /api {
        proxy_pass http://localhost:4444;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.agromedscience.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.agromedscience.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}






server {
    if ($host = www.agromedscience.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = agromedscience.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name agromedscience.com www.agromedscience.com;
    return 404; # managed by Certbot




}
server {
    if ($host = admin.agromedscience.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name admin.agromedscience.com;
    return 404; # managed by Certbot


}
server {
    if ($host = api.agromedscience.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name api.agromedscience.com;
    return 404; # managed by Certbot


}