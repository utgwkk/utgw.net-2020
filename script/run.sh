#!/bin/bash

# ref: https://serverless.co.jp/blog/g30vzpio0ww/

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

HOSTNAME=0.0.0.0 exec node server.js
