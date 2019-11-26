module.exports = {
    getTasks: (req, res) => {
        const db = req.app.get('db')
        const userID = req.params.id
        db.get_tasks(userID)
            .then(result => {
                res.status(200).send(result)
            })
    },
    getAllProjects: (req, res)=> {
        // console.log('get all projects')
        const db = req.app.get('db')
        db.get_all_projects()
        .then(result => {
            res.status(200).send(result)
        })
    },
    getProjects: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.params)
        const id = req.params.id
        // console.log(id)

        db.get_projects(id)
            .then(result => {
                res.status(200).send(result)
            })
    },
    getProjectUser: (req, res) => {
        // console.log(req.params)
        const db = req.app.get('db')
        const user = req.params.user
        // console.log(user)
        db.get_project_user(user)
        .then(result => {
            // console.log(result)
            res.status(200).send(result)
        })
    },
    getTaskOrder: (req, res) => {
        const db = req.app.get('db')
        db.get_taskorder()
            .then(result => {
                res.status(200).send(result)
            })
    },
    addTask: (req, res) => {
        // console.log(req.body)
        const drop_id = req.body[0]
        const db = req.app.get('db')
        db.add_task(drop_id)
        .then(result => {
            res.status(200).send(result)
        })
    },
    updateTask: (req, res) => {
        const db = req.app.get('db')
        const content = req.body[0]
        const id = req.params.id
        // console.log(id, content)
        db.update_task([id, content]).then(result => {
            res.status(200).send(result)
        })
    },
    deleteTask: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.params.id)
        const id = req.params.id
        db.delete_task(id)
        .then(result => {
            res.status(200).send(result)
        })
    }
}