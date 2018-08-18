import ContactList from '../models/ContactList'
import BaseController from './baseController'

class ContactListController extends BaseController {
}
const controller = new ContactListController()
controller.setModel(ContactList)
module.exports = controller
