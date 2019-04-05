require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const Ctrl = require('./controller')

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
	app.set('db', db)
	console.log('DB is all set')
})


app.get('/api/houses', Ctrl.getAllHouses)
app.post('/api/houses', Ctrl.createHouse)
app.delete('/api/houses/:id', Ctrl.deleteHouse)





app.listen(SERVER_PORT, () => console.log('SHUFFLE SHUFFLE MOVE MOVE SOMETHING SOMETHING ', SERVER_PORT))

