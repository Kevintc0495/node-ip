const express = require('express');
const router = express.Router();
const controller = require('../controllers');

module.exports = function() {
  router.get('/', controller.home);

  return router;
}
