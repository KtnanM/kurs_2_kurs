const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.setHeader('Access-Control-Allow-Methods', 'GET')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

	// Continue with your JSON file handling
	const filePath = './games.json'

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' })
			res.end('Internal Server Error')
			return
		}

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(data)
	})
})

server.listen(4000, () => {
	console.log('Server is running on port 4000')
})
