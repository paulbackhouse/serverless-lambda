# Serverless Lambda


## Overview
This project works in conjuction with https://github.com/paulbackhouse/nestjs-poc and demonostrates how to have a local environment setup that uses local AWS SQS where events are handled by these local Lambda.

This uses the Servless Framework
- https://www.serverless.com/framework/docs/providers/aws/guide/quick-start
- Offline plugin: https://www.npmjs.com/package/serverless-offline
- Offline SQS plugin: https://www.npmjs.com/package/serverless-offline-sqs

## Prerequisites
If you wish to run the hello or goodbye functions,
**You must have this project setup and running locally https://github.com/paulbackhouse/nestjs-poc**

Local lambda test-harness-lambda can be run without the need for this project.

**Note**
Current code for hello and goodbye handlers is commented out in serverless.yml

## LoggerService dependency
This project does contain a dependency on https://github.com/paulbackhouse/logger-test which is a test npm package - which requires adn instance of seq running locally:

### Local Seq - logging app
Local url: http://localhost:5341/

```bash
# https://docs.datalust.co/docs/getting-started-with-docker
$ docker run --name seq -d --restart unless-stopped -e ACCEPT_EULA=Y -p 5341:80 datalust/seq:latest
```
Make sure you have these containers and they are running.


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
$ sls invoke local -f {functionName} --path {event-json-file}
```
See: https://docs.aws.amazon.com/code-samples/latest/catalog/lambda_functions-blank-java-event.json.html
Events can be from a queue, an HTTP request etc...


**Note** You need to restart the local SQS you have running as part of this project once you have started serverless the first time. 
The *serverless.yml* file sets up and autocreates the queues that are used with these lambdas.

```bash
$ docker exec -it alpine-sqs sh -c "supervisorctl restart elasticmq"
```