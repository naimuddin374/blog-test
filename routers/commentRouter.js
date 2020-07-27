const router = require('express').Router()
const authenticate = require('../authenticate')

// Import Controller
const { getAll, store, update, remove } = require('../controllers/commentController')

// Get all comment list
router.get('/', authenticate, getAll)

// Store new comment
router.post('/', authenticate, store)

// Update existing comment
router.put('/:id', authenticate, update)

// Delete comment
router.delete('/:id', authenticate, remove)


module.exports = router