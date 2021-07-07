# Signed Cloudinary Uploads

## Routes 

**Static**

http://localhost:3000/index.html  


**Data API with signature and timestamp**  

http://localhost:3000/api/signupload  
 

## Modify Static JavaScript

pubic/js/upload-client.js

```
cloudName: '<cloud_name>',
apiKey: '<api_key>',
```



## environmental variables

create .env file in this folder containing values from Console Dashboard  
```
CLOUD_NAME='<cloud_name>'
USER_NAME='<user email>'  this is an email
```

## Run the server
node app.js
