module.exports = {
    getTasks: (req, res) => {
        const db = req.app.get('db')
        db.get_tasks()
            .then(result => {
                res.status(200).send(result)
            })
    },
    getProjects: (req, res) => {
        const db = req.app.get('db')
        db.get_projects()
            .then(result => {
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
    updateTasks: (req, res) => {
        const db = req.app.get('db')
        const { task_id, content } = req.body
        db.update_task([task_id, content]).then(result => {
            res.status(200).send(result)
        })
       



    }
       
    }