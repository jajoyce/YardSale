const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String, 
            required: [true, 'Username is required.']
        }, 
        firstName: {
            type: String, 
            required: [true, 'First name is required.']
        }, 
        lastName: {
            type: String, 
            required: [true, 'Last name is required.']
        }, 
        location: {
            type: String, 
            required: [true, 'Location is required.']
        }, 
        profileImage: {
            type: String, 
        }, 
        averageRating: {
            type: Number, 
        }
    }, 
);

const User = mongoose.model('User', userSchema);

module.exports = User;