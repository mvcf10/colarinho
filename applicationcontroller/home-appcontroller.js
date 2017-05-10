var Applicationcontroller = require('./applicationcontroller.js');

var Homeappcontroller = function () {

	Applicationcontroller.call(this);
	this.nome = 'HOME CONTROLLER';
	this.view = '/../view/home.html';
	this.command = '';

}
//herança
Homeappcontroller.prototype = new Applicationcontroller();
Homeappcontroller.prototype.constructor = Homeappcontroller;

module.exports = Homeappcontroller;
