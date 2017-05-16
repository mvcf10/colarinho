var fs = require('fs');
var Erro = require('./erro-applicationcontroller.js');

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

    fs.readFile('./view/news-list.html', (err, data) => {

        if (!err) {
            
            var mimetype = 'text/html';
            res.writeHead(200, {'Content-Type': mimetype});
            res.write(data);
            res.end();
            
        } else {
            acErro = new Erro();
            acErro.mostraErro(res);            
            
        }
  });      
}

ApplicationController.prototype.mostraViewNewsCreate = function(req,res) {

    fs.readFile('./view/news-create.html', (err, data) => {

        if (!err) {
            
            var mimetype = 'text/html';
            res.writeHead(200, {'Content-Type': mimetype});
            res.write(data);
            res.end();
            
        } else {
            acErro = new Erro();
            acErro.mostraErro(res);            
            
        }
  });      
}

ApplicationController.prototype.getCommand = function () {
	return this.command;

}

ApplicationController.prototype.imprime = function () {
	console.log(this.nome);
}



module.exports = ApplicationController;