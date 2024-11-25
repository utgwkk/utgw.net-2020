#!/bin/sh
set -ex

S3_BUCKET_NAME=utgw-net-statics

aws s3 cp ./public/ s3://${S3_BUCKET_NAME}/ --recursive
aws s3 cp ./dist/static/ s3://${S3_BUCKET_NAME}/_next/static/ --recursive
