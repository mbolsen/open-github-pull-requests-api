const controller = require('../controller');
var router = require('express').Router();

router.get('/open-pulls', controller.openPulls.get);
router.get('*', controller.serveFrontEnd.get);

module.exports = router;