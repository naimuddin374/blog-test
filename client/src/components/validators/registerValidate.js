const registerValidate = data => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let response = {}
    if (!data.name) {
        response.name = 'Please provide name.'
    }
    if (!data.email) {
        response.email = 'Please provide email.'
    } else if (reg.test(data.email) === false) {
        response.email = 'Please provide a valid email.'
    }
    if (!data.contact) {
        response.contact = 'Please provide contact number.'
    } else if (data.contact.length > 11) {
        response.contact = 'Please provide valid contact number.'
    }
    if (!data.password) {
        response.password = 'Please provide password.'
    } else if (!data.confirmPassword) {
        response.confirmPassword = 'Please provide confirm password.'
    } else if (data.password !== data.confirmPassword) {
        response.confirmPassword = 'Confirm password doesn\'t match.'
    } else if (data.password.length < 6) {
        response.password = 'Password minimum 6 characters.'
    }
    return response
}
export default registerValidate