var InterceptingFilter = require('./interceptingfilter.js');

var LoginInterceptingFilter = function () {

}

//herança
LoginInterceptingFilter.prototype = new InterceptingFilter();
LoginInterceptingFilter.prototype.constructor = LoginInterceptingFilter;

LoginInterceptingFilter.prototype.filtrar = function() {
	//consultar o Context Object
};

module.exports = InterceptingFilter;