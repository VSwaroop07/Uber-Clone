const mongoose = require('mongoose');
const { populate } = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captianSchema = new mongoose.Schema({
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
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Vehicle Name at least be 3 characteres or long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [2, 'Plate Name at least be 2 characteres or long'],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    // location: {
    //     lat: {
    //         type: Number,
    //     },
    //     lng: {
    //         type: Number,
    //     },
    // },
})

captianSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captianSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captianSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captianModel = mongoose.model('captain', captianSchema);

module.exports = captianModel;