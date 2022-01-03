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

## Invoke a Lambda function
The following cmd will invoke a lambda, you do not need to the run the app first, this runs and invokes in one single cmd

```bash
# invokes a lambda using a json event file
 serverless-lambda % sls invoke local -f {functionName} --path {event-json-file}
```
See: https://docs.aws.amazon.com/code-samples/latest/catalog/lambda_functions-blank-java-event.json.html
Events can be from a queue, an HTTP request etc...


**Note** You need to restart the local SQS you have running as part of this project once you have started serverless the first time. 
The *serverless.yml* file sets up and autocreates the queues that are used with these lambdas.

```bash
$ docker exec -it alpine-sqs sh -c "supervisorctl restart elasticmq"
```