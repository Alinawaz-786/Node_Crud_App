const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/user')
        .then(function(response) {
            res.render("index", { users: response.data });
        }).catch(err => {
            res.send(err);
        })
    console.log("Render here")
}
exports.addUserRoutes = (req, res) => {
    res.render("add_user")
    console.log("add user Render here")
}
exports.updateUserRoutes = (req, res) => {
    res.render("update_user")
    console.log("update user Render here")
}