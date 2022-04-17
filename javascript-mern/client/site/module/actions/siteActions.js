import Service from "../services/siteService"

export function register(param, response, error) {
  let service = new Service;
  service.register( param, response, error);
}

export function login(param, response, error) {
  let service = new Service;
  service.login( param, response, error);
}
