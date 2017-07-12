var InterceptingFilter = function () {
	
}

InterceptingFilter.prototype.estaLogado = function(req) {
	console.log(req.headers.cookie);
	if (!req.headers.cookie) {
		return false
	}

	
	return true
};


InterceptingFilter.prototype.setaLogado = function(req) {

};





module.exports = InterceptingFilter;
