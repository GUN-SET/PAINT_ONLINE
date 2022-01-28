const express = require('express')
const app = express()
const WSserver = require('express-ws')(app)
const aWss = WSserver.getWss()
const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
	ws.on('message', (msg) => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case "connection":
				connectionHandler(ws, msg)
				break
		}
	})
})

app.listen(PORT, () => {
	console.log(`Server started on ${PORT} port`)})

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(`Пользователь ${msg.username} подключен`)
		}
	})
}


