const controller = require('../controller');
var router = require('express').Router();

router.get('/open-pulls', controller.openPulls.get);

module.exports = router;