var HomeController = require('./homecontroller.js');

const manipulador = (request, response) => {  
  
  if (request.method == 'GET') {

  	switch(request.url) {
      case '/':
          hc = new HomeController();
          response.end(hc.getController());
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