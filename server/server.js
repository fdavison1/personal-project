require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const c = require('./taskController')
const a = require('./authController')

//MIDDLEWARE---------------------------------------------------------------------------------
const app = express()
app.use(express.json())
app.use(
    session({
        resave: false, 
        saveUninitialized: false, 
        secret: SESSION_SECRET
    })
)

//AUTH CONTROLLER ENDPOINTS--------------------------------------------------------------------------
app.post('/auth/register', a.register)
app.post('/auth/login', a.login)
app.delete('/auth/logout', a.logout)

//TASK CONTROLLER ENDPOINTS--------------------------------------------------------------------------
app.get('/api/tasks/:id', c.getTasks)
app.post('/api/tasks', c.addTask)
app.put('/api/task/:id', c.updateTask)
app.delete('/api/task/:id', c.deleteTask)

app.get('/api/taskOrder', c.getTaskOrder)

app.get('/api/projects/:id', c.getProjects)
app.get('/api/project/:user', c.getProjectUser)




massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} may or may not be working`))
})
