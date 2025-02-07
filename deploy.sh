#!/bin/bash

LOG_FILE="/var/log/startpage_deploy.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

cd /var/www/startpage.schasch.xyz || { log "Failed to navigate to repository directory"; exit 1; }

if git pull origin master; then
    log "PULL SUCCESS"
else
    log "PULL FAILED"
fi
