
class LoggerService {

    getLogger(lambdaName) {
        const Logger = require('@paulkb/logger-test');
        return new Logger.LoggerService({
            serviceName: lambdaName,
            logLevel: Logger.LogLevel.info,
            loggingType: Logger.LoggerType.backend,
            isProd: false,
            url: 'http://localhost:5341'
        });
    }
}

module.exports = new LoggerService();