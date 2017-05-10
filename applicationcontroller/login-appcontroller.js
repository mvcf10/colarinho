var Applicationcontroller = require('./applicationcontroller.js');

var Loginappcontroller = function () {

	Applicationcontroller.call(this);
	this.nome = 'LOGIN CONTROLLER';
	this.view = '/../view/login.html';
	this.command = '';

}
//herança
Loginappcontroller.prototype = new Applicationcontroller();
Loginappcontroller.prototype.constructor = Loginappcontroller;

module.exports = Loginappcontroller;
