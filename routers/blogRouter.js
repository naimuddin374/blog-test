const router = require('express').Router()
const authenticate = require('../authenticate')

// Import Controller
const { getAll, getMyBlog, store, update, remove } = require('../controllers/blogController')

// Get all blog list
router.get('/', authenticate, getAll)

// Get my created blog list
router.get('/my', authenticate, getMyBlog)

// Store new blog
router.post('/', authenticate, store)

// Update existing blog
router.put('/:id', authenticate, update)

// Delete blog
router.delete('/:id', authenticate, remove)


module.exports = router