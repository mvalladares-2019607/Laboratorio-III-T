const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    experienceYears: {
        type: String,
        required: true
    },
    levelImpact: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    }

}); 

const Company = mongoose.model('Company', companySchema);
module.exports = Company;