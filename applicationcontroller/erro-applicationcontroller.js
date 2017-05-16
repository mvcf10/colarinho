var fs = require('fs');


var ErroApplicationController = function() {
	
}

ErroApplicationController.prototype.mostraErro = function(res) {
fs.readFile('./view/erro.html', (err, data) => {

    	if (!err) {
            
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            
        } else {
            console.log ('Erro ao ler o erro.html');
            console.log (err);
        }
  });	
}


module.exports = ErroApplicationController;