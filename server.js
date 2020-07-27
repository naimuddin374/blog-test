const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

// App
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(passport.initialize())
require('./passport')(passport)
require('dotenv').config()

const path = require('path')

// Import Routes
const authRouter = require('./routers/authRouter')
const blogRouter = require('./routers/blogRouter')
const commentRouter = require('./routers/commentRouter')


// Router 
app.use('/api/auth', authRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/comments', commentRouter)

// Deploy to server 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/', (req, res) => {
    res.json({
        message: "Welcome To Our Application"
    })
})


// Database Connection
// const PORT = process.env.PORT || 4000
// let server = app.listen(PORT, () => {
//     let port = server.address().port
//     console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`)

//     // Database Configuration
//     mongoose.connect('mongodb://localhost:27017/test-blog', { useNewUrlParser: true }, () => {
//         console.log('Local Database Connected...')
//     })
// })


const PORT = process.env.PORT || 4000
let server = app.listen(PORT, () => {
    let port = server.address().port
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`)

    // Database Configuration
    mongoose.connect('mongodb://localhost:27017/test-blog', { useNewUrlParser: true }, () => {
        console.log('Local Database Connected...')
    })
})
