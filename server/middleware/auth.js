const config = require('config')
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    if (!token) {
        res.status(401).json({error: 'No token, authorization denied.'});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({error: "Token is not valid."})
    }
}

module.exports = auth;