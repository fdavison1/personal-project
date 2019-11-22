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
    addTask: (req, res) => {
        const db = req.app.get('db')
        db.add_task()
        .then(result => {
            res.status(200).send(result)
        })
    },
    // updateTask: (req, res) => {
    //     const db = req.app.get('db')
    //     const { task_id, content } = req.body
    //     db.update_task([task_id, content]).then(result => {
    //         res.status(200).send(result)
    //     })
    // },
    deleteTask: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.params)
        const id = req.params.id
        // return console.log(id)
        db.delete_task(id)
        .then(result => {
            res.status(200).send(result)
        })
    }
}