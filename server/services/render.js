exports.homeRoutes = (req, res) => {
    res.render("index");
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