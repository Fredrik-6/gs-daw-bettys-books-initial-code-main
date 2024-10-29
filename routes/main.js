var session = require ('express-session')

// Create a new router
const express = require("express")
const router = express.Router()

// Handle our routes
router.get('/',function(req, res, next){
    res.render('index.ejs')
})

router.get('/about',function(req, res, next){
    res.render('about.ejs')
})

router.get('/registered',function(req, res, next){
    res.render('registered.ejs')
})
const bcrypt = require('bcrypt')
const saltRounds = 10
const plainPassword = req.body.password
bcrypt.hash(plainPassword, saltRounds, function(err, hashedPassword) {
    // Store hashed password in your database.
  })
  
// Create a session
app.use(session({
    secret: 'somerandomstuff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))


// Export the router object so index.js can access it
module.exports = router