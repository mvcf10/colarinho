//Main

const http = require('http')  
const port = 3000

var manipulador = require('./manipulador.js')

const server = http.createServer(manipulador);

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`O servidor está rodando na porta: ${port}`)
})