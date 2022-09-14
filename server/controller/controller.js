var Userdb = require('../model/model');

//Create and save new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
    }

    const user = new Userdb({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        })
        //save user in the database

    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })

}

//retrieve and return all users/retrieve single user
exports.find = (req, res) => {
        if (req.query.id) {
            const id = req.query.id;
            Userdb.findById(id).then(user => {
                if (user) {
                    res.status(404).send({ message: "Not Found user with id" + id })
                } else {
                    res.send(data)
                }
            }).catch(err => {
                res.status(500).send({ message: err.message });
            })
        } else {
            Userdb.find().then(user => {
                res.send(user)
            }).catch(err => {
                res.status(500).send({ message: err.message });
            })
        }
    }
    //Update new user identified user by id
exports.update = (req, res) => {
        if (!req.body) {
            res.status(400).send({ message: "Update Content cannot be empty" }).then(data => {

            });
        }
        const id = req.params.id;
        Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot Update user with Maybe user not found" })
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })

    }
    // Delete a user with specified user id in the request
exports.delete = (req, res) => {
    Userdb.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(404).send({ message: "cannot delete with this Id,MeybId is wrong" })
        } else {
            res.send({ message: "User delete successfully" })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete user with ID"
        });
    });

}