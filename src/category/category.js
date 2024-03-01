const mongoose = require('mongoose'); 

const CategorySchema = Schema({
    nameCategory: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Category  = mongoose.model('Category', CategorySchema);
module.exports = Category;