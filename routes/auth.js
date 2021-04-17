const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/signUp', authController.signUp );
router.post('/login', authController.login );
router.post('/usersetup', authController.userSet );

module.exports = router;