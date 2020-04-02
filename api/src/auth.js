const jwt = require('express-jwt');

module.exports = {
    jwt: (secret) => (jwt({ secret }).unless({ path: ['/login'] })),
    error: (error, request, response, next) => {
        if (error.name === 'UnauthorizedError') {
            response.status(401).json({
                error: 'Invalid auth token'
            });
        }
    }
}