var Frontcontroller = require('./frontcontroller.js');

var HomeController = function () {

	Frontcontroller.call(this);
	this.controller = 'ESSE EH HOME CONTROLLER';

}
//herança
HomeController.prototype = new Frontcontroller();
HomeController.prototype.constructor = HomeController;

module.exports = HomeController;
