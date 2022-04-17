const ContactList = require("../models/ContactList");
const BaseController = require("./baseController");

class ContactListController extends BaseController {
}
const controller = new ContactListController()
controller.setModel(ContactList)
module.exports = controller
