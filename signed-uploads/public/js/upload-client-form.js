document.addEventListener('DOMContentLoaded', async () => {

    const signResponse = await fetch('/api/signuploadform');
    const signData = await signResponse.json();

    const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const files = document.querySelector("[type=file]").files;
        const formData = new FormData();
    
        // Append parameters to the form data. The parameters that are signed using 
        // the signing function (signuploadform) need to match these.
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            formData.append("file", file);
            formData.append("api_key", signData.apikey);
            formData.append("timestamp", signData.timestamp);
            formData.append("signature", signData.signature);
            formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
            formData.append("folder", "signed_upload_demo_form");
    
            fetch(url, {
                method: "POST",
                body: formData
            })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                console.log(JSON.parse(data))
                var str = JSON.stringify(JSON.parse(data), null, 4);
                document.getElementById("formdata").innerHTML += str;
            });
        }
    });

})

