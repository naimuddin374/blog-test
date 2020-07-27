const router = require('express').Router()

// Import Controller
const { register, login } = require('../controllers/authController')

// Registration route
router.post('/register', register)

// Login route
router.post('/login', login)


module.exports = router