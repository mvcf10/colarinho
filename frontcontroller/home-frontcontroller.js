var Frontcontroller = require('./frontcontroller.js');
var HomeAppController = require('../applicationcontroller/home-appcontroller.js');

var HomeFrontController = function () {

	Frontcontroller.call(this);
	

}
//herança
HomeFrontController.prototype = new Frontcontroller();
HomeFrontController.prototype.constructor = HomeFrontController;

HomeFrontController.prototype.executa = function (obj) {

	home = new HomeAppController();
	home.mostraView(obj);
}

module.exports = HomeFrontController;
