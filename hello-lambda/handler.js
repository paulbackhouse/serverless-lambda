'use strict';

module.exports.hello = async (event) => {

  console.log('hello lambda called from queue... hello every body :)', event);
  
  return {
    statusCode: 200,
    body:null,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
