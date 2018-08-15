import BaseService from '../../shared/services/ParentService';

class SharedService extends BaseService {
  constructor() {
  	super()
  	this.path = "admin/shared"
  }

  getLoggedInUser( callback, errorback) {
    this.get(
      "/get-logged-in-user", null,
      callback,
      errorback
    );
  }

  getUserPermission( callback, errorback) {
    this.get(
      "/get-user-permission", null,
      callback,
      errorback
    );
  }

  getActionCodes(data, callback, errorback) {
    this.get(
      "/get-action-codes", data,
      callback,
      errorback
    );
  }

  getModuleCodes(data, callback, errorback) {
    this.get(
      "/get-module-codes", data,
      callback,
      errorback
    );
  }

  getProfileCodes(data, callback, errorback) {
    this.get(
      "/get-profile-codes", data,
      callback,
      errorback
    );
  }

  getDomainCodes(data, callback, errorback) {
    this.get(
      "/get-domain-codes", data,
      callback,
      errorback
    );
  }

  getCountryCodes(data, callback, errorback) {
    this.get(
      "/get-country-codes", data,
      callback,
      errorback
    );
  }

  getCityIds(data, callback, errorback) {
    this.get(
      "/get-city-ids", data,
      callback,
      errorback
    );
  }
}

export default SharedService
