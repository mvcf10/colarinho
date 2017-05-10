var fs = require('fs');

var Applicationcontroller = require('./applicationcontroller.js');

var Erroappcontroller = function () {

	Applicationcontroller.call(this);
	this.nome = 'ERRO CONTROLLER';
	this.view = '/../view/erro.html';
	this.command = '';

}
//herança
Erroappcontroller.prototype = new Applicationcontroller();
Erroappcontroller.prototype.constructor = Erroappcontroller;

Erroappcontroller.prototype.mostraView = function(obj) {
	
	fs.readFile(__dirname + this.view,'utf8', (err, data) => {

		if (err) {

			console.logn(err);

		}

		else {
				obj.writeHead(404, {'Content-Type': 'text/html'});
        		obj.write(data);
        		obj.end();	
		}
        
    });
          
}

module.exports = Erroappcontroller;
