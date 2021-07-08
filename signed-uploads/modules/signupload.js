require('dotenv').config()
const cloudinary = require('cloudinary').v2
const apiSecret = cloudinary.config().api_secret

const crypto = require('crypto')
const utf8 = require('utf8') // sha1 requires

const signupload = () => {
  const timestamp = new Date().getTime()
  const strtosign = `source=uw&timestamp=${timestamp}${apiSecret}`
  const signature = utf8.encode(
    crypto
      .createHash('sha1')
      .update(strtosign)
      .digest('hex')
  )
  return { timestamp, signature }
}

module.exports = {
  signupload
}
