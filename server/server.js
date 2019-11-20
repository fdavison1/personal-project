require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

//middleware
app.use(express.json())
//app.use(session...)

//endpoints

//listening
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`port ${ SERVER_PORT } is working?`))
})


