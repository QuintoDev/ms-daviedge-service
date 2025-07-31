import winston from 'winston';

const traceIdFormat = winston.format((info) => {
    info.traceId = info.traceId || 'N/A';
    return info;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        traceIdFormat(),
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export { logger };