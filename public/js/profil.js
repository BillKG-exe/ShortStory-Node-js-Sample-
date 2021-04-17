var counter = 0;

function showBar() {
  counter += 1;
  document.getElementById('menu-bar').style.transition.duration = "4s";

  if(counter % 2 != 0) {
    document.getElementById('pHeader').style.display = "none";
    document.getElementById('menu-bar').style.display = "flex";
  } else {
    document.getElementById('pHeader').style.display = "block";
    document.getElementById('menu-bar').style.display = "none";
  }

}
