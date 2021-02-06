import * as express from 'express'

import tagsController from '../controllers/tagsController'

class Tags {
  public router

  constructor () {
    this.router = express.Router()
    this.setTagsRoute()
  }

  private setTagsRoute (): void {
    this.router
      .use((req, res, next) => { tagsController.init(req, res, next) })
      .post('/*', (req, res) => { tagsController.route(req.body) })
  }
}

export default new Tags().router
