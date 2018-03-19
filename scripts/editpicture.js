function previewFile() {
  var preview = document.getElementById("preview");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "img/upload-empty.png";
  }
}
previewFile(); //calls the function named previewFile()

function editFile() {
  var preview = document.getElementById("preview"); 
  var profilePic = document.getElementById("profilePic");
  if (preview.src != "http://localhost:3000/img/upload-empty.png") {
    console.log(preview.src);
    profilePic.src = preview.src;
  }
}
