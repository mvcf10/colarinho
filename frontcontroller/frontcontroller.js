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

FrontController.prototype.executa = function(req,res) {
	ac = new ApplicationController();
	ac.mostraView(req,res);
}

module.exports = FrontController;