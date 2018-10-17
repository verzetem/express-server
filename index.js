const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.user(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res, next) => {
	res.send('You are awesome')
})

app.listen(port, () => {
	console.log(`I got you on ${ port }`)
})