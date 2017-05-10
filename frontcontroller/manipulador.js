var HomeFrontController = require('./home-frontcontroller.js');
var LoginFrontController = require('./login-frontcontroller.js')
const manipulador = (request, response) => {  
  
  if (request.method == 'GET') {
    console.log(request.url);
  	switch(request.url) {
      case '/':
          hfc = new HomeFrontController();
          hfc.executa(response);
          break;
      case '/login':
          lfc = new LoginFrontController();
          lfc.executa(response);
          break;
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