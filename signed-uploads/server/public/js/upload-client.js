document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/signupload')
  const data = await response.json()

  const options = {
    cloudName: data.cloudname,
    apiKey: data.apikey,
    uploadSignatureTimestamp: data.timestamp,
    uploadSignature: data.signature,
    cropping: false
  }

  const processResults = (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log(result)
      document.querySelector('#uploaded').src = result.info.secure_url
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
