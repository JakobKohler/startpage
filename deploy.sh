#!/bin/bash

LOG_FILE="/var/log/startpage_deploy.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

if git pull origin main; then
    log "PULL SUCCESS"
else
    log "PULL FAILED"
fi