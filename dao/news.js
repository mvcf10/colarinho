const bd = require('../banco/banco.js');

var News = function() {
	
}

News.prototype.get = function(id) {
  return new Promise((resolve, reject) => {
	  bd.query('SELECT * from news where id=$1', [id], function(err, res) {
  		  if(err) {
    		  console.error('error running query', err);
          return reject(err);
  		  }
 	  
  	return resolve(res.rows)
	  });
  })
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
  })
	
};

News.prototype.save = function(obj) {
	var queryTxt = 'insert into news (title,date,headline_content,headline_image,content) values ($1,$2,$3,$4,$5)';
  return new Promise((resolve, reject) => {
	 bd.query(queryTxt, [obj.title,obj.date,obj.headline_content,obj.headline_image,obj.content], function(err, res) {
     if(err) {
       console.error('error running query', err);
       return reject(err);
  	  }
 	    return resolve(res);
      console.log('Inserido!');
   });
	})
};


module.exports = News;