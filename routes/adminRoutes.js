const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', adminController.register);
router.post('/login', adminController.login);

module.exports = router;
