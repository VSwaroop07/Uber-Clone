const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userShema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First Name at least be 3 characteres or long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'last Name at least be 3 characteres or long'],
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must not be at '],
    },
    password: {
        type: string,
        required: true,
        select:false,
    },
    socketId: {
        type: String,
    },
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;