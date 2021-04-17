const express = require('express');
const editController = require('../controllers/edits');
const router = express.Router();


router.post('/editProfile', editController.edit_user_profile );

module.exports = router;
/* /app.post('/editProfile', editProfile.edit_user_profile); */