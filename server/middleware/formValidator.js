let userErrors = require('./../errors/user')

exports.SignInValidator = (req, res, next) => {
    req.check('email', userErrors.userErrors.emptyEmail).notEmpty().isEmail().withMessage(userErrors.userErrors.notEmail)
    req.check('password', userErrors.userErrors.emptyPassword).notEmpty()

    const errors = req.validationErrors()

    if(errors) {
        return res.status(400).json({err: errors[0].msg})
    }

    next()
}

exports.SignUpValidator = (req, res, next) => {
    req.check('email', userErrors.userErrors.emptyEmail).notEmpty().isEmail().withMessage(userErrors.userErrors.notEmail)
    req.check('password', userErrors.userErrors.emptyPassword).notEmpty()
    req.check('passwordRep', userErrors.userErrors.emptyPassword).notEmpty()
    const errors = req.validationErrors()
    if(errors) {
        return res.status(400).json({err: errors[0].msg})
    }
    next()
}
