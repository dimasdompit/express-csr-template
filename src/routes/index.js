const router = require('express').Router();
const AuthRoutes = require('./Auth');

router.use('/auth', AuthRoutes);

module.exports = router;