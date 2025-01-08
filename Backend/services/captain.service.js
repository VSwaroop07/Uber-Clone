const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vechicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vechicleType) {
        throw new Error('All Fields are Required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType: vechicleType
        }
    })
    return captain;
}