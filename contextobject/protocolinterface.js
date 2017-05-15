var ProtocolInterface = function () {
	this.nomeusuario = 'Antoin';
	this.lingua = 'Cearês rústico';
	this.email = 'antoin@deitadonarede.com';
	this.senha = '123456';
}

ProtocolInterface.prototype.getNomeUsuario = function() {
	return this.nomeusuario;
};

ProtocolInterface.prototype.getLingua = function() {
	return this.lingua;
};

ProtocolInterface.prototype.getEmail = function() {
	return this.email;
};

ProtocolInterface.prototype.getSenha = function() {
	return this.senha;
};

ProtocolInterface.prototype.getSessao = function (req,res) {
	var cookies = [];
	req.headers.cookie && req.headers.cookie.split(';').forEach(function(cookie) {
		var parts = cookie.split('=');
		cookies[parts[0].trim()] = (parts[1] || '').trim();
	});
	
	var session_id = cookies.hasOwnProperty('session')? cookies.session: '';
	return session_id;
}

ProtocolInterface.prototype.setarCookie = function(res,session_id) {
	res.writeHead(200, {
    'Set-Cookie':'session=' + session_id });
}

ProtocolInterface.prototype.limparCookie = function(res,session_id) {
	res.writeHead(200, {
    'Set-Cookie':'session='+ session_id +'; expires='+new Date(new Date().getTime()+86409000).toUTCString();
	});
}

module.exports = ProtocolInterface;
