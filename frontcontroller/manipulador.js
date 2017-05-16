var Frontcontroller = require('./frontcontroller.js');

const manipulador = (request, response) => {  
  fc = new Frontcontroller();

  if (request.method == 'GET') {

    switch(request.url) {
    case '/':
        fc.executaNewsList(request,response);
        break;
    case '/news':
        fc.executaNewsList(request,response);
        break;
    case '/news/create':
        fc.executaNewsCreate(request,response);
        break;    
    default:
        fc.executaGenerico(request,response);
    } 

    
  }

  else if (request.method == 'POST') {
    response.end('Opa.. trabalhando no post');
  }

  else {
  	response.end('Ainda não preparado para métodos diferentes de GET/POST');
  }
  
}

module.exports = manipulador;