const express = require('express')
const getAllUsers = require('../controllers/admin.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const roleMiddleware = require('../middlewares/role.middleware')
const router = express.Router();

router.get('/getusers', authMiddleware, roleMiddleware(['Admin']), getAllUsers);

module.exports = router