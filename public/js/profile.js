const navLink = document.getElementsByClassName('navLink');
const barIcon = document.getElementById('barIcon');
const times   = document.getElementById('times');

function navBarAnimation(nav) {
  nav.style.width = "90%";
  nav.style.height = "45px"/* auto */;
  //nav.style.padding = "0";
  nav.style.borderRadius = "100px";
  nav.style.transitionDuration = "0.5s";

  for(var count = 0; count < navLink.length; count++) {
    navLink[count].style.display = "block";
    navLink[count].style.transitionDuration = "0.3s";
  }
/*
  times.style.display = 'block';
  barIcon.style.display = 'none';*/
}

function animeBackToNormal(nav) {
  nav.style.width = "45px";
  nav.style.height = "45px";
  nav.style.padding = "0";
  nav.style.borderRadius = "50%";
  for(var count = 0; count < navLink.length - 1; count++) {
    navLink[count].style.display = "none";
    navLink[count].style.transitionDuration = "0.5s";
  }

}

function close() {
  nav = document.querySelector("nav");
  nav.style.width = "45px";
  nav.style.height = "45px";
  nav.style.borderRadius = "50%";
  for(var count = 0; count < navLink.length - 1; count++) {
    navLink[count].style.display = "none";
    navLink[count].style.transitionDuration = "0.5s";
  }
}