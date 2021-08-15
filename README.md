# Cloudinary signed upload examples

This code demonstrates two ways of performing a signed upload to Cloudinary from the browser, using a server to create the signature. One uses Cloudinary's upload widget, the other uses a standard HTML form.

* Files specific to signed upload using Cloudinary's upload widget:
  * modules/signuploadwidget.js
  * public/uploadwidget.html
  * public/js/uploadclientwidget.js
  * routes/signuploadwidget.js
* Files specific to signed upload using a standard HTML form:
  * modules/signuploadform.js
  * public/uploadform.html
  * public/js/uploadclientform.js
  * routes/signuploadform.js

## Setup instructions (after cloning from GitHub)

1. Install all dependencies from the top level:
   
   `npm install`
1. Open **signed-uploads/public/js/config.js**
1. Set `cloud_name`, `api_key` and `api_secret` with the corresponding account details from your Cloudinary dashboard.
1. Run the app to start the server:
    
    `node signed-uploads/app.js`

    The response should be:

    `Server is up on http://localhost:3000`
1. Open `http://localhost:3000` in a browser.

## Setup instructions (if running on Glitch)

1. Open **signed-uploads/public/js/config.js**
1. Set `cloud_name`, `api_key` and `api_secret` with the corresponding account details from your Cloudinary dashboard.
1. Click **View App**.

## Links

GitHub: [https://github.com/cloudinary-devs/cld-signed-upload-examples](https://github.com/cloudinary-devs/cld-signed-upload-examples)

Glitch: [https://glitch.com/~cld-signed-upload-examples](https://glitch.com/~cld-signed-upload-examples)