const express = require('express');
const uploadsController = require('../controllers/uploads');
const router = express.Router();


router.post('/profil', uploadsController.profile );

module.exports = router;