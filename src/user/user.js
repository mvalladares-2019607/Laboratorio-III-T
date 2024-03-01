const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        unique: true, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    correo: {
        type: String, 
        required: true
    }, 

}); 

const Usuario = mongoose.model('Usuario', userSchema);
module.exports = Usuario;