const ContactList = require('../models/ContactList');
const BaseController = require('./baseController');

class ContactListController extends BaseController {
}
var controller = new ContactListController()
controller.setModel(ContactList)
module.exports = controller
