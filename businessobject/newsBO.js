

var NewsBO = function(title,date,headlineContent,headlineImage,content) {
  this.title = title;
  this.date = date;
  this.headlineContent = headlineContent;
  this.headlineImage = headlineImage;
  this.content = content;
}

NewsBO.prototype.getTitle = function() {
  return this.title
}

NewsBO.prototype.getDate = function() {
  return this.date
}

NewsBO.prototype.getHeadlineContent = function() {
  return this.headlineContent
}

NewsBO.prototype.getHeadlineImage = function() {
  return this.headlineImage
}

NewsBO.prototype.getContent = function() {
  return this.content
}

NewsBO.prototype.setTitle = function (title) {
  this.title = title
}

NewsBO.prototype.setDate = function (date) {
  this.date = date
}

NewsBO.prototype.setHeadlineContent = function(headlineContent) {
  this.headlineContent = headlineContent
}

NewsBO.prototype.setHeadlineImage = function(headlineImage) {
  this.headlineImage = headlineImage
}

NewsBO.prototype.setContent = function(content) {
  this.content = content
}

module.exports = NewsBO;

