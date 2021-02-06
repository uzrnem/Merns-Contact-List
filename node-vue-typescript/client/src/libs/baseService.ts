import axios from "axios";

class BaseService {
  public path: string = '';
  public payload: any = {};

  constructor(path : string) {
    this.path = path;
  }

  getPath() : string {
    return this.path;
  }

  setPath(path : string) : void {
    this.path = path;
  }

  post(data:any = null, callback:any, errorback:any) :void {
    axios.post('http://localhost:4000/api/'+this.getPath(), data)
    .then((response) => { callback(response.data) })
    .catch((err) => { errorback(err.data) })
  }

  create(data:any = null, callback:any, errorback:any) :void {
    this.payload = {
      action : 'add',
      data : data
    }
    return this.post(this.payload, callback, errorback)
  }

  read(id:string, data:any = null, callback:any, errorback:any) :void {
    this.payload = {
      action : 'get',
      id: id,
      data : data
    }
    return this.post(this.payload, callback, errorback)
  }

  update(id:string, data:any = null, callback:any, errorback:any) :void {
    this.payload = {
      action : 'edit',
      id: id,
      data : data
    }
    return this.post(this.payload, callback, errorback)
  }

  remove(id:string, callback:any, errorback:any) :void {
    this.payload = {
      action : 'delete',
      id: id
    }
    return this.post(this.payload, callback, errorback)
  }

  list(data:any, callback:any, errorback:any) :void {
    this.payload = {
      action : 'list',
      data : data
    }
    return this.post(this.payload, callback, errorback)
  }
}

export default BaseService;
