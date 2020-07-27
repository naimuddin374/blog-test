const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2');

const BlogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: null,
        trim: true
    },
    isComment: { //true=enable for comment, false=disable comment
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

BlogSchema.plugin(mongoosePaginate);
const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog