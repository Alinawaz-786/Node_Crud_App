const mongoose = require('mongoose');

var employeSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        minLength: 4,
        maxLength: 15
    }
})

const EmployeDataBase = mongoose.model("employe", employeSchema);

module.exports = EmployeDataBase;