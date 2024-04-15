#!/bin/bash

echo "Install dependencies"
sudo apt install -y certbot openssl python3-certbot-dns-digitalocean

echo "Creates the DO Credentials"
touch ~/certbot-creds.ini
chmod go-rwx ~/certbot-creds.ini
echo "dns_digitalocean_token = $DO_TOKEN"

# Get the current date in seconds since the epoch
current_date=$(date +%s)

# Get the certificate's expiration date in a compatible format
expire_date=$(echo | openssl s_client -connect helixauth.com:443 2>/dev/null \
               | openssl x509 -noout -enddate | cut -d= -f2)
expire_date_s=$(date -j -f "%b %d %T %Y %Z" "${expire_date}" +%s)

# Calculate the difference in days
expire_days=$(( ($expire_date_s - $current_date) / 86400 ))

# Output and check
if [ $expire_days -le 5 ]; then
    certbot certonly -d helixauth.com -d dev.helixauth.com --dns-digitalocean-propagation-seconds 5000 --dns-digitalocean --dns-digitalocean-credentials ~/certbot-creds.ini --config-dir ./config --work-dir ./work --logs-dir ./logs -m ekrusznis@gmail.com --agree-tos
    exit 1
else
    echo "The certificate for $DOMAIN is valid for $expire_days more day(s)."
fi