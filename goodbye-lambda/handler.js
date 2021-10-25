'use strict';

module.exports.goodbye = async (event) => {

  console.log('goodbye lambda called from queue... goodbye every body :(', event);

  return {
    statusCode: 200,
    body: null,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
