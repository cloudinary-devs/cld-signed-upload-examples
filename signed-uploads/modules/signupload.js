require('dotenv').config()
const cloudinary = require('cloudinary').v2
//const apiSecret = cloudinary.config().api_secret

const signupload = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    source: 'uw',
    folder: 'signed_upload_demo_uw'}, apiSecret);
  
  return { timestamp, signature }
}

module.exports = {
  signupload
}
