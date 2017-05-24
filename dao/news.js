const bd = require('../banco/banco.js');

var News = function() {
	
}

News.prototype.get = function(id) {

	bd.query('SELECT * from news where id=$1', [id], function(err, res) {
  		if(err) {
    		return console.error('error running query', err);
  		}
 	console.log('resultado: ', res.rows);
  	return res.rows
	});

};

News.prototype.findAll = function() {

  return new Promise((resolve, reject) => {
    bd.query('SELECT * from news order by date desc',  function(err, res) {
      if(err) {
        console.error('error running query', err);
        return reject(err);
      }

      return resolve(res.rows);
    });



    /*http.get(apiServer.getServer, function(resp){
      resp.on("data", (chunk) => {
        //console.log(chunk.toString());
        return resolve(JSON.parse(chunk));
        });
      }).on("error", function(e){
        //console.log("Got error: " + e.message);
        return reject(e.message);
        }); */   
  })
	
};

News.prototype.save = function(obj) {
	var queryTxt = 'insert into news (title,date,headline_content,headline_image,content) values ($1,$2,$3,$4,$5)';

	bd.query(queryTxt, [obj.title,obj.date,obj.headline_content,obj.headline_image,obj.content], function(err, res) {
  		if(err) {
    		return console.error('error running query', err);
  		}
 	console.log('Inserido!');
  	
	});
	
};


module.exports = News;