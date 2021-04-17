const express = require('express');
const resetLinkController = require('../controllers/sendResetLink');
const resetPWController = require('../controllers/resetPassword');
const router = express.Router();


router.post('/sendLink', resetLinkController.sendLink );
router.get('/:token', resetPWController.getResetPage );

module.exports = router;