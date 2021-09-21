'use strict';

var axios = require('axios');

function Service(path) {
  this.path = path;
}

Service.prototype.setLocation = function(path) {
  this.path = path;
};

Service.prototype.getPath = function() {
  return this.path;
};

Service.prototype.put = function(url, data = null, callback, errorback) {
  axios.put(this.getPath() + url, data)
  .then((response) => { callback(response) })
  .catch((err) => { errorback(err) })
};

Service.prototype.post = function(url, data = null, callback, errorback) {
  axios.post(this.getPath() + url, data)
  .then((response) => { callback(response) })
  .catch((err) => { errorback(err) })
};

Service.prototype.get = function(url, data = null, callback, errorback) {
  axios.get(this.getPath() + url, { params : data })
  .then((response) => { callback(response) })
  .catch((err) => { errorback(err) })
};

Service.prototype.delete = function(url, callback, errorback) {
  axios.delete(this.getPath() + url)
  .then((response) => { callback(response) })
  .catch((err) => { errorback(err) })
};

Service.prototype.create = function(data = null, callback, errorback) {
  return this.put("/edit", data, callback, errorback)
};

Service.prototype.read = function(id, data = null, callback, errorback) {
  return this.get("/get/" + id, data, callback, errorback)
};

Service.prototype.edit = function(id, data = null, callback, errorback) {
  return this.get("/edit/" + id, data, callback, errorback)
};

Service.prototype.update = function(id, data = null, callback, errorback) {
  return this.put("/edit/" + id, data, callback, errorback)
};

Service.prototype.remove = function(id, callback, errorback) {
  return this.delete("/edit/" + id, callback, errorback)
};

Service.prototype.list = function(data, callback, errorback) {
  return this.get("/get", data, callback, errorback)
}


module.exports = Service;
