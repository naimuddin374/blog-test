const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
    },
    status: {
        type: Number, //0=Pending,1=Active, 2=Block
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);
module.exports = User