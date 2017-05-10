var Frontcontroller = require('./frontcontroller.js');
var ErroAppController = require('../applicationcontroller/erro-appcontroller.js');

var ErroFrontController = function () {

	Frontcontroller.call(this);
	

}
//herança
ErroFrontController.prototype = new Frontcontroller();
ErroFrontController.prototype.constructor = ErroFrontController;

ErroFrontController.prototype.executa = function (obj) {

	home = new ErroAppController();
	home.mostraView(obj);
}

module.exports = ErroFrontController;
