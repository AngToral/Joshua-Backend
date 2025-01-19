const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    profileType: {
        type: String,
        enum: ['admin', 'user'],
    },
    plan: {
        type: String,
        enum: ['Basic', 'Plus', 'Pro', 'Personal'],
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    removedAt: Date
},
    { timestamps: true }
)

const userModel = mongoose.model("userModel", userSchema);

module.exports = { userModel }