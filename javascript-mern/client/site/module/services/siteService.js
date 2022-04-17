import BaseService from 'gisue';


class SiteService extends BaseService {
  constructor() {
  	super()
  	this.path = "api/users/"
  }

  register (params, res, err) {
    return this.post('register', params, res, err);
  }

  login (params, res, err) {
    return this.post('login', params, res, err);
  }
}

export default SiteService
