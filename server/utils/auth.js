const jwt = require("jsonwebtoken");
const config = require("config");

exports.createJWT = (email, userId, duration) => {
    console.log(config.get('jwtSecret'))
    const payload = {
        email,
        userId,
        duration
    };

    return jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: duration,
    });
};