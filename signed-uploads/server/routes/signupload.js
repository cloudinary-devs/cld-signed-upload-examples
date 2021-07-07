const express = require('express')
const router = express.Router()
const signature = require('../modules/signupload')

const cloudinary = require('cloudinary').v2
const cloudName = cloudinary.config().cloud_name
const apiKey = cloudinary.config().api_key

// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signature.signupload()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: cloudName,
    apikey: apiKey
  })
})

module.exports = router
