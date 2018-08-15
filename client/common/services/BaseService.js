import axios from "axios";

class BaseService {
  constructor(path) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }

  setPath(path) {
    this.path = path;
  }

  put(url, data = null, callback, errorback) {
    axios.put(this.getPath() + url, data)
    .then((response) => { callback(response) })
    .catch((err) => { errorback(err) })
  }

  post(url, data = null, callback, errorback) {
    axios.post(this.getPath() + url, data)
    .then((response) => { callback(response) })
    .catch((err) => { errorback(err) })
  }

  get(url, data = null, callback, errorback) {
    axios.get(this.getPath() + url, { params : data })
    .then((response) => { callback(response) })
    .catch((err) => { errorback(err) })
  }

  delete(url, callback, errorback) {
    axios.delete(this.getPath() + url)
    .then((response) => { callback(response) })
    .catch((err) => { errorback(err) })
  }

  create(data = null, callback, errorback) {
    return this.put("/edit", data, callback, errorback)
  }

  read(id, data = null, callback, errorback) {
    return this.get("/get/" + id, data, callback, errorback)
  }

  edit(id, data = null, callback, errorback) {
    return this.get("/edit/" + id, data, callback, errorback)
  }

  update(id, data = null, callback, errorback) {
    return this.put("/edit/" + id, data, callback, errorback)
  }

  remove(id, callback, errorback) {
    return this.delete("/edit/" + id, callback, errorback)
  }

  list(data, callback, errorback) {
    return this.get("/get", data, callback, errorback)
  }
}

export default BaseService;
