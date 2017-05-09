//Main

const http = require('http')  
const port = 3000

var HomeController = require('./homecontroller.js');


const requestHandler = (request, response) => {  
  
  if (request.method == 'GET') {

  	switch(request.url) {
      case '/':
          hc = new HomeController();
          response.end(hc.getController());
          break;
      default:
          response.end('NÃO RECONHECIDO');
    } 
  }

  else {
  	response.end('Ainda não preparado para métodos diferentes de GET');
  }
  
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})