const inputFile = document.querySelector("#fileUpload");

const previewImage = document.querySelector(".remove__nonedit")
const editedTab = document.querySelector('#edited-image');

const saveButton = document.querySelector('#saveBtn');

const editBlock = document.querySelector('.edit_block');

const result = document.querySelector('.remove__result')
const loader = document.querySelector('.loader');

const backgroundColor = document.getElementById("bg_color");

inputFile.addEventListener("change", function () {
   let image = inputFile.files[0];
   showPreviewImage(image);
   removeBackground(image);
   resetSettings();

})

function showPreviewImage(file) {
   let reader = new FileReader()
   reader.onload = function () {
      previewImage.src = reader.result;
   }
   reader.readAsDataURL(file);
}

function removeBackground(file) {
   let data = new FormData();
   data.append("image_file", file);
   data.append("bg_color", backgroundColor.value);

   editedTab.click();
   loader.style.display = 'block';

   let url = "https://api.benzin.io/v1/removeBackground";
   let options = {
      headers: {
         "X-Api-Key": "preview size by default , dont require api key"
      },
      method: "POST",
      body: data
   }
   fetch(url, options)
      .then(response => response.blob())
      .then(blob => {
         return URL.createObjectURL(blob);
      })
      .then(blobUrl => {
         result.src = blobUrl;
         loader.style.display = "none";
         saveButton.href = blobUrl;
         saveButton.download = "image.png";
         saveButton.style.display = "block";
      })
}

function resetSettings() {
   backgroundColor.value = "";
   previewImage.src = "";
   result.src = "";
   inputFile.value = "";
}