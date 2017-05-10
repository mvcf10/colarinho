var HomeController = require('./homecontroller.js');
var fs = require('fs');
const manipulador = (request, response) => {  
  
  if (request.method == 'GET') {

  	switch(request.url) {
      case '/':
          hc = new HomeController();
          
          fs.readFile(__dirname + hc.getController(),'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            //console.log(hc.getController());
            response.end();
          });
          
          //response.end('Acho que vc esta no HOME');
          
          break;
      case '/login':
          response.end('Falta implmentar o GET DO LOGIN');
      default:
          response.end('NAO RECONHECIDO');
    } 
  }
  else if (request.method == 'POST') {
   switch(request.url) {
      case '/login':
          response.end('Falta implmentar o POST DO LOGIN');
      default:
          response.end('NAO RECONHECIDO');
    } 
  }

  else {
  	response.end('Ainda não preparado para métodos diferentes de GET');
  }
  
}

module.exports = manipulador;