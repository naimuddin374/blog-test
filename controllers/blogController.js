const bcrypt = require('bcrypt')
const { actionSuccess, createdSuccess, updatedSuccess, badRequest, validationError, serverError, copyFile, makeRand, removeFile, filterText } = require('../util/helper');
const Blog = require('../model/Blog')

module.exports = {
    getAll(req, res) {
        Blog.find().populate('userId')
            .then(result => {
                return actionSuccess(res, 'Data Found', result)
            })
            .catch(error => {
                return badRequest(res, error)
            })
    },
    getMyBlog(req, res) {
        Blog.find({ userId: req.user._id })
            .then(result => {
                return actionSuccess(res, 'Data Found', result)
            })
            .catch(error => {
                return badRequest(res, error)
            })
    },
    store(req, res) {
        // Data Read From Request
        let { title, description } = req.body
        let blog = new Blog({
            title,
            description,
            userId: req.user._id
        })
        blog.save()
            .then(result => {
                return createdSuccess(res)
            })
            .catch(err => {
                return serverError(res, err)
            })

    },
    update(req, res) {
        let { title, description, isComment } = req.body
        Blog.findOneAndUpdate({ _id: req.params.id }, { $set: { title, description, isComment } }, { new: true })
            .then(result => {
                return updatedSuccess(res, result._doc)
            })
            .catch(error => {
                return serverError(res, error)
            })
    },
    remove(req, res) {
        let { id } = req.params
        Blog.findOneAndDelete({ _id: id })
            .then(result => {
                return actionSuccess(res, 'Delete Successful!')
            })
            .catch(error => serverError(res, error))
    }
}