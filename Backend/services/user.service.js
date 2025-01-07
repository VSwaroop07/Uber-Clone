const userModel = require('../models/user.model');

module.exports.creatUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All Fields are Required');
    }
    const user = userModel.create({
        fullname : {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}