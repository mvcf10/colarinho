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
module.exports = FrontController;