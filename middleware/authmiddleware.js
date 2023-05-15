function auth (req, res, next) {
    const authHeader = req.headers.authorization;

    console.log(authHeader);

    if(authHeader === '1234') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    };


};

module.exports = auth;