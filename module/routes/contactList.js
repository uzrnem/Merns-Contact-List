import express from 'express'

import baseController from '../controllers/baseController'
import controller from '../controllers/contactListController'

const router = express.Router();

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
