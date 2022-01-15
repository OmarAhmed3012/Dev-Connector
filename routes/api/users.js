const express = require('express')
const router = express.Router()

// @router      Get api/users
// @desc        test route
// @access      Public
router.get('/', (req, res) => res.send('User Router'))

module.exports = router
