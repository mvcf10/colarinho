//Classe FrontController

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

module.exports = FrontController;