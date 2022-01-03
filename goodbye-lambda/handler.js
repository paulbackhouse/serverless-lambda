'use strict';

module.exports.goodbye = async (event) => {

  const service  = require('../LoggerService');
  const log = service.getLogger('Goodbye Lambda');

  log.info('Lambda Handler: Start: Event handler, beginning process', event);

  try {
    // some other code would be here
    log.info('Lambda Handler: Complete: Event handled', event);
  
    return {
      statusCode: 500
    }
  }
  catch (ex) {
    log.error('Lambda failed to handle event', {
      event: event,
      exception: ex
    });
  }

  throw new Error('Failed: Lambda failed to handle the event', event);
  
};
