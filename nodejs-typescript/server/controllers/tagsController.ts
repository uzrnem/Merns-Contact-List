import Tag from '../models/Tag'
import BaseController from './baseController'

class TagsController extends BaseController {
  constructor () {
    super()
    this.setModel(Tag)
  }
}

export default new TagsController()
