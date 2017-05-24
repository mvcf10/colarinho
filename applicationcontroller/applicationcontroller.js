var fs = require('fs');
var Erro = require('./erro-applicationcontroller.js');
var DaoNews = require('../dao/news.js');
var ejs = require('ejs');

var ApplicationController = function () {
	//Construtor
	this.nome = 'APPLICATION CONTROLLER';
	this.view = 'VIEW';
}

ApplicationController.prototype.getView = function () {
	return this.view;
}

//COMMAND
ApplicationController.prototype.mostraViewGenerico = function(req,res) {

	fs.readFile('./' + req.url, (err, data) => {

    	if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.jpeg': 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ req.url.substr(dotoffset) ];
            
            res.writeHead(200, {'Content-Type': mimetype});
            res.write(data);
            res.end();
            
        } else {
            acErro = new Erro();
            acErro.mostraErro(res);            
            
        }
  });      
}

ApplicationController.prototype.mostraViewNewsList = function(req,res) {
    //View para Renderizar
    var viewFile = './view/news-list.ejs';
    var mmtype = 'text/html';
    var templateString = fs.readFileSync(viewFile, 'utf-8');

    //Buscar as notícias no banco de dados
    dao = new DaoNews();
    dao.findAll()
      .then(function (resposta) {
          //renderizando a view
          //people = ['geddy', 'neil', 'alex'];
          //console.log(resposta);
          html = ejs.render(templateString, {noticias: resposta,user:null});
          obj = res;
          obj.writeHead(200, {'Content-Type': mmtype});
          obj.write(html);
          obj.end();
          //ApplicationController.prototype.renderiza(viewFile,mmtype,res);
          //console.log(html);
      })
      .catch(error => { 
          console.log('Falha ao Obter notícias - ' + error);
      });
          
}

ApplicationController.prototype.mostraViewNewsCreate = function(req,res) {
    //View para Renderizar
    var viewFile = './view/news-create.html';
    var mmtype = 'text/html';
    ApplicationController.prototype.renderiza(viewFile,mmtype,res);      
}

ApplicationController.prototype.getCommand = function () {
	return this.command;

}

ApplicationController.prototype.imprime = function () {
	console.log(this.nome);
}

ApplicationController.prototype.renderiza = function (arquivo, mt, obj) {
    fs.readFile(arquivo, (err, data) => {
        if (!err) {
            var mimetype = mt;
            obj.writeHead(200, {'Content-Type': mimetype});
            obj.write(data);
            obj.end();
            
        } else {
            acErro = new Erro();
            acErro.mostraErro(obj);            
            
        }
    });
}

module.exports = ApplicationController;