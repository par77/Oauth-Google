const express = require('express')
const session = require('express-session')
const passport = require('passport')

require('./auth')


const app = express()
app.use(session({ secret: 'cats'}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('<a href="/auth/google">Authentication with Google</a>')
})

app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile']})
)

app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/auth/failure'
    })
)

app.get(
    '/auth/failure', 
    (req, res) => {
        res.send('Unable to load')
    }
)

app.get('/profile', isLoggedIn, (req, res) => {
    res.send(`Name: ${req.user.displayName} <br> Email: ${req.user.email} <br> Profile Pic: <img src="${req.user.picture}">`)
})

app.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy()
})

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401)
}

app.listen(3001, () => console.log('Listening on 3001 port'))