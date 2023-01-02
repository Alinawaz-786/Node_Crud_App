const EmployeDataBase  = require("../model/employe");

exports.EmployyeCreate = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Empty Content" });
    }

    const EmployeeData = new EmployeDataBase({
        name: req.body.name,
        department: req.body.department,
        gender: req.body.gender,
        salary: req.body.salary
    })

    console.log(EmployeeData);
    
    try {
        EmployeeData.save(EmployeeData).then(data => {
            console.log("Dona");
        }).catch(err => {
            res.status(500).send({ message: err.message })
        })

    } catch (error) {
        res.status(500).send({ message: error })
    }
}

exports.EmployyeList = (req, res) => {
    EmployeDataBase.find().then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
}