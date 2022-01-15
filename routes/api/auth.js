const express = require('express')
const router = express.Router()

// @router      Get api/auth
// @desc        test route
// @access      Public
router.get('/', (req, res) => res.send('Auth Router'))

module.exports = router
