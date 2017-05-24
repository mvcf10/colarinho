//Classe FrontController
var ApplicationController = require('../applicationcontroller/applicationcontroller.js');

var FrontController = function () {
	//Construtor
	this.controller = 'FRONT CONTROLLER';
}

FrontController.prototype.getController = function () {
	return this.controller;
}

FrontController.prototype.imprime = function () {
	console.log(this.controller);
}

FrontController.prototype.executaGenerico = function(req,res) {
	ac = new ApplicationController();
	ac.mostraViewGenerico(req,res);
}

FrontController.prototype.executaNewsList = function(req,res) {
	ac = new ApplicationController();
	ac.mostraViewNewsList(req,res);
}

FrontController.prototype.executaNewsCreate = function(req,res) {
	ac = new ApplicationController();
	ac.mostraViewNewsCreate(req,res);
}

FrontController.prototype.executaNewsShow = function(req,res) {
	ac = new ApplicationController();
	ac.mostraViewNewsShow(req,res);
}

FrontController.prototype.processaGet = function (req,res) {
	var caminho = '';
	//console.log(req.url.lastIndexOf('?'));

	if (req.url.lastIndexOf('?') > 0) {
		caminho = req.url.slice(0,req.url.lastIndexOf('?'));
	}

	else {
		caminho = req.url;	
		}
	
	//console.log(caminho);

    switch(caminho) {
    case '/':
        FrontController.prototype.executaNewsList(req,res);
        break;
    case '/news':
        FrontController.prototype.executaNewsList(req,res);
        break;
    case '/news/create':
        FrontController.prototype.executaNewsCreate(req,res);
        break;
    case '/news/show':
    	FrontController.prototype.executaNewsShow(req,res);
    	break;    
    default:
        FrontController.prototype.executaGenerico(req,res);
    }
}
module.exports = FrontController;