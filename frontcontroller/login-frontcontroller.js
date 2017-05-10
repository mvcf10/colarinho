var Frontcontroller = require('./frontcontroller.js');
var LoginAppController = require('../applicationcontroller/login-appcontroller.js');

var LoginFrontController = function () {

	Frontcontroller.call(this);
	

}
//herança
LoginFrontController.prototype = new Frontcontroller();
LoginFrontController.prototype.constructor = LoginFrontController;

LoginFrontController.prototype.executa = function (obj) {

	home = new LoginAppController();
	home.mostraView(obj);
}

module.exports = LoginFrontController;
