# cld-signed-upload

This code demonstrates two ways of performing a signed upload to Cloudinary from the browser, using a server to create the signature. One uses Cloudinary's upload widget, the other uses a standard HTML form.

* Files specific to signed upload using Cloudinary's upload widget:
  * modules/signupload.js
  * public/uploadwidget.html
  * public/js/upload-client.js
  * routes/signupload.js
* Files specific to signed upload using a standard HTML form:
  * modules/signuploadform.js
  * public/uploadform.html
  * public/js/upload-client-form.js
  * routes/signuploadform.js

## Setup instructions

1. Install all dependencies from the top level:
   
   `npm install`
1. Copy (or rename) .env.template to .env.
1. In .env set: 
   * **CLOUDINARY_URL**: copy this from your dashboard
1. Run the app to start the server:
    
    `node signed-uploads/app.js`

    The response should be:

    `Server is up on http://localhost:3000`
1. Open `http://localhost:3000` in a browser.