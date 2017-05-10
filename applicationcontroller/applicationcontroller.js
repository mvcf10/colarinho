//Classe Application Controller
var fs = require('fs');


var ApplicationController = function () {
	//Construtor
	this.nome = 'APPLICATION CONTROLLER';
	this.view = 'VIEW';
	this.command = 'COMMAND';
}

ApplicationController.prototype.getView = function () {
	return this.view;

}

ApplicationController.prototype.mostraView = function(obj) {

	

	fs.readFile(__dirname + this.view,'utf8', (err, data) => {

		if (err) {

			console.logn(err);

		}

		else {
				obj.writeHead(200, {'Content-Type': 'text/html'});
        		obj.write(data);
        		obj.end();	
		}
        
    });
          
}

ApplicationController.prototype.getCommand = function () {
	return this.command;

}

ApplicationController.prototype.imprime = function () {
	console.log(this.nome);
}

module.exports = ApplicationController;