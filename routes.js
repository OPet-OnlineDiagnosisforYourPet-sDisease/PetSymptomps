const express = require('express');
const router = express.Router();
const { postGejala, getGejala } = require('./handler');

router.post('/gejala', postGejala);
router.get('/gejala', getGejala);

module.exports = router;
