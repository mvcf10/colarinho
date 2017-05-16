const bd = require('../banco/banco.js');

var Comment = function() {
	
}

Comment.prototype.findByNews = function(obj) {

	bd.query('SELECT * from comment where news_id=$1',[obj.id]  function(err, res) {
  		if(err) {
    		return console.error('error running query', err);
  		}
 	console.log('resultado: ', res.rows);
  	return res.rows
	});
	
};


Comment.prototype.save = function(obj) {
	var queryTxt = 'insert into comment (author,content,date,news_id) values ($1,$2,$3,$4)';

	bd.query(queryTxt, [obj.author,obj.content,obj.date,obj.news_id], function(err, res) {
  		if(err) {
    		return console.error('error running query', err);
  		}
 	console.log('Inserido');
  
	});
	
};


module.exports = Comment;