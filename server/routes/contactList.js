const express = require("express");
const controller = require("../controllers/contactListController");

const router = express.Router();

router
  .use((req, res, next) => { controller.init(req, res, next) })
  .get('/test', (req, res) => res.json({msg: 'Contact List Works'}))
  .get('/get/:userId', (req, res) => controller.get(req.params.userId))
  .put('/edit', (req, res) => controller.store(req.body));

module.exports = router;
