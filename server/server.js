require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const c = require('./taskController')

const app = express()
app.use(express.json())


//endpoints
app.get('/api/tasks', c.getTasks)
// app.put('/api/tasks', c.updateTasks)

app.get('/api/taskOrder', c.getTaskOrder)

app.get('/api/projects', c.getProjects)



massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} may or may not be working`))
})
