const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        console.log(username, password)
        const db = req.app.get('db')

        //check to see if already registered (or if user already exists)
        const result = await db.get_user([username])
        const existingUser = result[0]
        if (existingUser) {
            return res.status(409).send('Username taken')
        }

        //add new user to database
        const registeredUser = await db.register_user(username)
        const user = registeredUser[0]


        //generate hash for new user
        const salt = bcrypt.genSalt(10)
        const hash = bcrypt.hashSync(password, salt)
        db.insert_hash({})
    }
}