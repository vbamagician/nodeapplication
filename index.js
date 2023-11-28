require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/kamalam', (req, res) => {
    res.send('Hi Kamal!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})