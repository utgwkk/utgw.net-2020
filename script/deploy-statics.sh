#!/bin/sh
set -ex

S3_BUCKET_NAME=utgw-net-statics

aws s3 cp ./public/ s3://${S3_BUCKET_NAME}/ --recursive
aws s3 cp ./styles/ s3://${S3_BUCKET_NAME}/styles/ --recursive
