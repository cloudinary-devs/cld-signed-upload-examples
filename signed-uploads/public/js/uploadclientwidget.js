document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/signuploadwidget');
  const data = await response.json();

  const options = {
    cloudName: data.cloudname,
    apiKey: data.apikey,
    uploadSignatureTimestamp: data.timestamp,
    uploadSignature: data.signature,
    cropping: false,
    folder: 'signed_upload_demo_uw'
  }

  const processResults = (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log(result)
      
      var str = JSON.stringify(result, null, 4);
      document.getElementById("uwdata").innerHTML += str;
    }
  }

  const myWidget = window.cloudinary.createUploadWidget(
    options,
    processResults
  )
  document
    .getElementById('upload_widget')
    .addEventListener('click', () => myWidget.open(), false)
})
