# cld-signed-upload

Demonstration of a signed upload from the browser, using a server to create the signature.

## Set up instructions

1. Install all dependencies from the top level:<br>
    `npm install`
1. Change directory to signed-uploads:<br>
    `cd signed-uploads/`
1. Copy (or rename) .env.template to .env.
1. In .env set: 
   * **CLOUDINARY_URL**: copy this from your dashboard
   * **USER_NAME**: the email you use to log into Cloudinary
1. Run the app to start the server:<br>
    `node app.js`<br>
    The response should be:<br>
    `Server is up on http://localhost:3000`
1. Open `http://localhost:3000` in a browser.