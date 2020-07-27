const validator = require('validator')

const userValidator = data => {
    let error = {}

    if (!data.name) {
        error.name = "Please provide a name"
    }

    if (!data.email) {
        error.email = 'Please provide email'
    } else if (!validator.isEmail(data.email)) {
        error.email = 'Please provide a valid email'
    }

    if (!data.password) {
        error.password = 'Please provide password'
    } else if (!data.confirmPassword) {
        error.confirmPassword = 'Please provide confirm password'
    } else if (data.password !== data.confirmPassword) {
        error.confirmPassword = "Confirm password doesn't match"
    }

    if (!data.contact) {
        error.contact = "Please provide a contact number"
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = userValidator
