var Frontcontroller = require('./frontcontroller.js');
var HomeAppController = require('../applicationcontroller/home-appcontroller.js');

var HomeFrontController = function () {

	Frontcontroller.call(this);
	

}
//herança
HomeFrontController.prototype = new Frontcontroller();
HomeFrontController.prototype.constructor = HomeFrontController;

HomeFrontController.prototype.executa = function (req,res) {

	home = new HomeAppController();
	home.mostraView(req,res);
}

module.exports = HomeFrontController;
