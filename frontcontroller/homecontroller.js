var Frontcontroller = require('./frontcontroller.js');
var HomeAppController = require('../applicationcontroller/home-appcontroller.js');

var HomeController = function () {

	Frontcontroller.call(this);
	home = new HomeAppController();
	this.controller = home.getView();

}
//herança
HomeController.prototype = new Frontcontroller();
HomeController.prototype.constructor = HomeController;

module.exports = HomeController;
