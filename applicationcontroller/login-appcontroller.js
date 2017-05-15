var Applicationcontroller = require('./applicationcontroller.js');
var Contextobject = require('../contextobject/contextobject.js');

var Loginappcontroller = function () {

	Applicationcontroller.call(this);
	this.nome = 'LOGIN CONTROLLER';
	this.view = '/../view/login.html';

}

//herança
Loginappcontroller.prototype = new Applicationcontroller();
Loginappcontroller.prototype.constructor = Loginappcontroller;

//Checar que o usuário tem sessão ativa



module.exports = Loginappcontroller;
