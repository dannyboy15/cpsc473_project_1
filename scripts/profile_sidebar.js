function openOptionMenu() {
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById("optionMenu").style.width = "30%";
  document.getElementById("optionMenu").style.display = "block";
  document.getElementById("nav").style.display = "none";
}

function closeOptionMenu() {
  document.getElementById("main").style.marginRight = "0%";
  document.getElementById("optionMenu").style.display = "none";
  document.getElementById("nav").style.display = "inline-block";
}

function openEditMenu() {
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById("editMenu").style.width = "30%";
  document.getElementById("editMenu").style.display = "block";
  document.getElementById("nav").style.display = "none";
}

function closeEditMenu() {
  document.getElementById("editMenu").style.display = "none";
}

function openSMMenu() {
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById("smMenu").style.width = "30%";
  document.getElementById("smMenu").style.display = "block";
  document.getElementById("nav").style.display = "none";
}

function closeSMMenu() {
  document.getElementById("smMenu").style.display = "none";
}
