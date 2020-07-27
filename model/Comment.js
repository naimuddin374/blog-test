const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2');

const CommentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: false
    },
    comments: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

CommentSchema.plugin(mongoosePaginate);
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment