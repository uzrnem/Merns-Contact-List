import Service from "../services/siteService"

export function register(param, response) {
  let service = new Service;
  service.register(param,response);
}
