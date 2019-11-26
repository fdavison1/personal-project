const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')

        const result = await db.get_user([username])
        const existingUser = result[0]
        if (existingUser) {
            return res.status(409).send({message: 'Username taken'})
        }

        //add new user to database
        const registeredUser = await db.register_user(username)
        const user = registeredUser[0]

        //generate hash for new user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        db.insert_hash({user_id: user.id, hash})

        //generate new project
        db.create_project({user_id: user.id})


        //assign user to session
        req.session.user = {username: user.username, userID: user.id}
        res.status(201).send({message: 'logged in', user: req.session.user})
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const foundUser = await db.get_user(username)
        const user = foundUser[0]
        //if user does not exist...
        if (!user){
            return res.status(401).send({message: 'user not found, please make an account'})
        }
        //if password incorrect...
        const findHash = await db.find_hash(user.id)
        const hash = findHash[0].hash
        const goodPassword = bcrypt.compareSync(password, hash)
        if (!goodPassword){
            return res.status(403).send({message: 'incorrect password'})
        }
        req.session.user = {username: user.username, userID: user.id}
        res.status(200).send({message: 'hooray!', user: req.session.user})

    },
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send({message: 'Logged Out'})
    }
}