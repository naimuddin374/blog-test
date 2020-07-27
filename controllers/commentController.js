const { actionSuccess, createdSuccess, updatedSuccess, badRequest, validationError, serverError, copyFile, makeRand, removeFile, filterText } = require('../util/helper');
const Comment = require('../model/Comment')

module.exports = {
    getAll(req, res) {
        Comment.find().populate('userId')
            .then(result => {
                return actionSuccess(res, 'Data Found', result)
            })
            .catch(error => {
                return badRequest(res, error)
            })
    },
    store(req, res) {
        // Data Read From Request
        let { commentId, comments } = req.body
        let comment = new Comment({
            commentId,
            comments,
            userId: req.user._id
        })
        comment.save()
            .then(result => {
                return createdSuccess(res)
            })
            .catch(err => {
                return serverError(res, err)
            })

    },
    update(req, res) {
        let { commentId, comments } = req.body
        Comment.findOneAndUpdate({ _id: req.params.id }, { $set: { commentId, comments } }, { new: true })
            .then(result => {
                return updatedSuccess(res, result._doc)
            })
            .catch(error => {
                return serverError(res, error)
            })
    },
    remove(req, res) {
        let { id } = req.params
        Comment.findOneAndDelete({ _id: id })
            .then(result => {
                return actionSuccess(res, 'Delete Successful!')
            })
            .catch(error => serverError(res, error))
    }
}