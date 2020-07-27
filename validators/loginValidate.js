const validator = require('validator')

const loginValidator = data => {
    let error = {}

    if (!data.email) {
        error.email = 'Please provide email or phone'
        // } else if (!validator.isEmail(data.email)) {
        //     error.email = 'Please provide a valid email'
    }

    if (!data.password) {
        error.password = 'Please provide password'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = loginValidator
