const cloudinary = require('cloudinary').v2;
require('../public/js/config');
const apiSecret = cloudinary.config().api_secret;

// Server-side function used to sign an Upload Widget upload.
const signuploadwidget = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    source: 'uw',
    folder: 'signed_upload_demo_uw'}, apiSecret);
  
  return { timestamp, signature }
}

module.exports = {
  signuploadwidget
}
