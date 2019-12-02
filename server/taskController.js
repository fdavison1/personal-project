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
        const db = req.app.get('db')
        db.get_all_projects()
        .then(result => {
            res.status(200).send(result)
        })
    },
    getProjects: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id

        db.get_projects(id)
            .then(result => {
                res.status(200).send(result)
            })
    },
    getProjectUser: (req, res) => {
        const db = req.app.get('db')
        const user = req.params.user
        db.get_project_user(user)
        .then(result => {
            res.status(200).send(result)
        })
    },
    getTaskOrder: (req, res) => {
        const db = req.app.get('db')
        const projectID = +req.params.id
        db.get_taskorder(projectID)
            .then(result => {
                res.status(200).send(result)
            })
    },
    addTask: (req, res) => {
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
        db.update_task([id, content]).then(result => {
            res.status(200).send(result)
        })
    },
    deleteTask: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        db.delete_task(id)
        .then(result => {
            res.status(200).send(result)
        })
    },
    updateTitle: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        const title = req.body[0]
        db.update_title([id, title])
        .then(result => {
            res.status(200).send(result)
        })
    }
}