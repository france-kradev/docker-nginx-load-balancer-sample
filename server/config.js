const config = {
    serviceName: process.env.SERVICE_NAME || 'Service 1',
    port: process.env.PORT || 3001,
    host: process.env.HOST || '0.0.0.0',
}

module.exports = config;
