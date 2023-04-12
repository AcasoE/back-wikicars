const jwt = require('jsonwebtoken');



const generateSign = (email, id)=>{
    return jwt.sign({id, email}, process.env.JWT_SECRET, {expiresIn: '1d'});
};

const verifyToken =(token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
};


module.exports = {generateSign, verifyToken};