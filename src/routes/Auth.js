const router = require('express').Router();
const AuthController = require('../controllers/auth');

router.post('/register', (r, s) => AuthController.register(r, s));
router.post('/login', (r, s) => AuthController.login(r, s))

module.exports = router;