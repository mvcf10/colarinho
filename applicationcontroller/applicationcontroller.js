//Classe Application Controller
var fs = require('fs');


var ApplicationController = function () {
	//Construtor
	this.nome = 'APPLICATION CONTROLLER';
	this.view = 'VIEW';
}

ApplicationController.prototype.getView = function () {
	return this.view;

}

//COMMAND
ApplicationController.prototype.mostraView = function(req,res) {

	fs.readFile('./' + req.url, (err, data) => {

    	if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            //console.log(req.url.substr(dotoffset));
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.jpeg': 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ req.url.substr(dotoffset) ];
            res.setHeader('Content-type' , mimetype);
            res.end(data);
            //console.log( req.url, mimetype );
        } else {
            console.log ('file not found: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
  });
	/*fs.readFile(__dirname + this.view, (err, data) => {

		if (err) {
			console.log(err);
		}

		else {
				obj.writeHead(200, {'Content-Type': 'text/html'});
        		obj.write(data);
        		obj.end();	
		}
        
    });*/
          
}

ApplicationController.prototype.getCommand = function () {
	return this.command;

}

ApplicationController.prototype.imprime = function () {
	console.log(this.nome);
}

module.exports = ApplicationController;