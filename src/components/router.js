const express = require('express');
const router = express.Router();
const getBotInfo = require('../endpoints/getBotInfoEndpoint');
const postMeme = require('../endpoints/postMemeEndpoint');

// Add more endpoints here.
router.use('/bot', getBotInfo);
router.use('/meme', postMeme);

module.exports = router;