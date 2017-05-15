var ContextObject = function () {
	this.nomeusuario = 'Nome do Usuário';
	this.lingua = 'Desconhecida';
	this.logado = false;
}


ContextObject.prototype.getNomeUsuario = function() {
	return this.nomeusuario;
};

ContextObject.prototype.getLingua = function() {
	return this.lingua;
};

ContextObject.prototype.setNomeUsuario = function(nome) {
	this.nomeusuario = nome;
};

ContextObject.prototype.setLingua = function(lin) {
	this.lingua = lin;
};

ContextObject.prototype.setLogado = function(status) {
	this.logado = status;
}

ContextObject.prototype.getLogado = function(status) {
	return this.logado;
}


module.exports = ContextObject;
