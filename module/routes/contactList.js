const express = require('express');
const router = express.Router();
var baseController = require('../controllers/baseController')
var controller = require('../controllers/contactListController')

router.get(
  '/get/:userId',
  (req, res) => {
    controller.init(req, res)
    controller.get(req.params.userId)
  }
);

router.put(
  '/edit',
  (req, res) => {
    controller.init(req, res)
    controller.store(req.body)
  }
);

module.exports = router;
