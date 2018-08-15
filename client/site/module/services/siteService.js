import BaseService from '../../../common/services/BaseService';


class SiteService extends BaseService {
  constructor() {
  	super()
  	this.path = "api/users/"
  }

  register (params, res) {
    return this.post('register', params, res, res);
  }
}

export default SiteService
