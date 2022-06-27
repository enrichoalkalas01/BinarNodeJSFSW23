const Express = require('express')
const Routes = Express.Router()

const userData = [
    {
        name: 'enrchoalkalas',
        username: 'enrichoalkalas',
        password: 12345,
    },
]

Routes.get('/',  (req, res) => {
    res.render('index', { data: userData[0] })
})

Routes.post('/login', (req, res) => {
    console.log(req.body.username)
    if ( req.body.username == '' ) {
        res.status(400).send({ message: 'Content must be filled' })
        return
    }

    if ( req.body.username == userData[0].username ) {
        if ( req.body.password == userData[0].password ) {
            res.status(200).send({
                message: 'Successfull to login',
                data: userData[0]
            })
        } else {
            res.status(500).send({
                message: 'Cant match input for username or password'
            })
        }
    }
})

module.exports = Routes