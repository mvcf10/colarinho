//Iniciando a Aplicação Web

const http = require('http')  
const port = 3000

var manipulador = require('./frontcontroller/manipulador.js')

const server = http.createServer(manipulador);

server.listen(port, (err) => {  
  if (err) {
    return console.log('Opsss.. aconteceu alguma coisa errada: ', err)
  }

  console.log(`A Aplicação WEB está rodando em Localhost na porta: ${port}`)
})