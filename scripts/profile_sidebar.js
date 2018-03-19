function openRightMenu() {
  document.getElementById("main").style.marginRight = "25%";
  document.getElementById("rightMenu").style.width = "25%";
  document.getElementById("rightMenu").style.display = "block";
  document.getElementById("nav").style.display = "none";
}

function closeRightMenu() {
  document.getElementById("main").style.marginRight = "0%";
  document.getElementById("rightMenu").style.display = "none";
  document.getElementById("nav").style.display = "inline-block";
}
