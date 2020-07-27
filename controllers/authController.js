const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/User')
const registerValidator = require('../validators/registerValidate')
const loginValidator = require('../validators/loginValidate')
const { actionSuccess, createdSuccess, badRequest, validationError, serverError, dataFound } = require('../util/helper');


module.exports = {
    register(req, res) {
        // Data Read From Request
        let { name, contact, email, password, confirmPassword, } = req.body

        // Data Validation
        const validate = registerValidator({ name, email, password, confirmPassword, contact })

        if (!validate.isValid) {
            return validationError(res, validate.error)
        } else {
            User.findOne({ email })
                .then(result => {
                    if (result) {
                        return res.status(406).json({
                            message: 'This User Already Exist'
                        })
                    }

                    // Data Schema 
                    bcrypt.hash(password, 11, (err, hash) => {
                        if (err) {
                            return serverError(res, err)
                        }
                        let user = new User({
                            name,
                            email,
                            password: hash,
                            contact,
                            status: 1,
                            createdAt: new Date(),
                        })

                        user.save()
                            .then(result => {
                                return createdSuccess(res, null, 'Your account has been created successfully!')
                            })
                            .catch(error => {
                                return serverError(res, error)
                            })
                    })
                })
                .catch(error => {
                    return badRequest(res, error)
                })
        }
    },
    login(req, res) {
        let { email, password } = req.body
        const validate = loginValidator({ email, password })
        if (!validate.isValid) {
            return validationError(res, validate.error)
        } else {
            User.findOne({ email })
                .then(user => {
                    if (!user) {
                        return res.status(400).json({
                            message: 'User Not Found!',
                            error: {}
                        })
                    } else if (user.status === 2) {
                        return res.status(400).json({
                            message: 'Your account has been blocked, please contact our support!',
                            error: {}
                        })
                    } else {
                        // Match Password
                        bcrypt.compare(password, user.password, (err, response) => {
                            if (err) {
                                return serverError(res, err)
                            }
                            if (!response) {
                                return res.status(406).json({
                                    message: "Password Doesn't Match!"
                                })
                            }
                            // Token Generate
                            let token = jwt.sign({
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                                status: user.status,
                                contact: user.contact,
                            }, 'SECRET', { expiresIn: '2d' })
                            return actionSuccess(res, 'Login Success', `Bearer ${token}`)
                        })
                    }
                })
                .catch(error => {
                    return badRequest(res, error)
                })
        }
    }
}
