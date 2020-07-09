const { check } = require('express-validator');
const validator = require('./validator');
const userValidator = [
// normalizeEmail dado un email no normalizado devuelve
// email normalizado y el email normalizado se lo pasa
// a la función isEmail que devuelve booleano, true si correcto
    check('email').normalizeEmail().isEmail(),
    check('password').isAlphanumeric().isLength({ min: 5, max: 10 }),
]

const USERVALIDATOREGISTER = [
    ...userValidator,
    check('name').isAlphanumeric().isLength({ min: 1, max: 50 }),
    validator
];

const USERVALIDATOLOGIN = [
    ...userValidator,
    validator
];

module.exports = {
    USERVALIDATOREGISTER,
    USERVALIDATOLOGIN
}