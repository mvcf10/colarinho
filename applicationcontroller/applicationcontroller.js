//Classe FrontController

var ApplicationController = function () {
	//Construtor
	this.nome = 'APPLICATION CONTROLLER';
	this.view = 'VIEW';
	this.command = 'COMMAND';
}

ApplicationController.prototype.getView = function () {
	return this.view;

}

ApplicationController.prototype.getCommand = function () {
	return this.command;

}

ApplicationController.prototype.imprime = function () {
	console.log(this.nome);
}

module.exports = ApplicationController;