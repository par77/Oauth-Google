// without passport
const express = require('express')
const axios = require('axios')
const app = express()

const CLIENT_ID = "735986879432-kdbi93o1aah8dj2tk8t4sn7qgh4ol6g4.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = 'http://localhost:4000/auth/google/callback';

app.get('/', (req, res) => {
    res.send(`<a href="/auth/google">Login with Google</a>`)
})

app.get('/auth/google', (req, res) => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
    `client_id=${CLIENT_ID}&` +
    `redirect_uri=${REDIRECT_URI}&` +
    `scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&` +
    `response_type=code`;

    res.redirect(authUrl)
})

app.get('/auth/google/callback', async (req, res) => {
    const code = req.query.code 

    const tokenUrl = 'https://oauth2.googleapis.com/token'
    const params = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
        grant_type: 'authorization_code',
    }

    try{
        const response = await axios.post(tokenUrl, null, {params})
        const accessToken = response.data.access_token

        const userData = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            header: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        console.log(userData.data)

res.send(`Name: ${req.user.displayName} <br> Email: ${req.user.email} <br> Profile Pic: <img src="${req.user.picture}">`)
    }catch(err){
        console.error(err)
        res.status(500).send(`Error: ${err.message}`)
    }
})

app.listen(4000, () => {
    console.log("Server listening on 4000")
})


