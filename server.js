const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
const app = express();

dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8080

// log requests 
app.use(morgan('tiny'))
    //  Connection mongoDB
connectDB();
app.use(express.json())
//Parser request to body-Parser
app.use(bodyParser.urlencoded({ extended: true }))

//set the view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "view/ejs"))


//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

/*app.get('/', (req, res) => {
    // res.send("Curd Application")
    res.render("index")
})
app.get('/add-user', (req, res) => {
    // res.send("Curd Application")
    res.render("add_user")
})
app.get('/update-user', (req, res) => {
    res.render("update_user")
})

app.get('/home', (req, res) => {
    res.send("Curd Application Home Pages")
})
now new router are loaded
*/

app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} `, )
});