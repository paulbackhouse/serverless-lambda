# Serverless Lambda


## Overview
This project works in conjuction with https://github.com/paulbackhouse/nestjs-poc and demonostrates how to have a local environment setup that uses local AWS SQS where events are handled by these local Lambda.

This uses the Servless Framework
- https://www.serverless.com/framework/docs/providers/aws/guide/quick-start
- Offline plugin: https://www.npmjs.com/package/serverless-offline
- Offline SQS plugin: https://www.npmjs.com/package/serverless-offline-sqs

## Prerequisites
You must have this project setup and running locally https://github.com/paulbackhouse/nestjs-poc 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ sls offline

# debug mode, shows all endpoints
$ SLS_DEBUG=* serverless offline
```

**Note** You need to restart the local SQS you have running as part of this project once you have 
```bash
$ docker exec -it alpine-sqs sh -c "supervisorctl restart elasticmq"
```