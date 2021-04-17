const options = document.getElementsByClassName('forms');


function expand(index) {
    options[index - 1].style.display = "block";
    options[index - 1].style.transitionDuration = "0.7s";
}

/* function close(index) {
    options[index - 1].innerHTML = "none";
}
 */
function bioLength() {
    var bio = document.getElementById('bio').value;
    document.getElementById("charCount").innerHTML = bio.length + "/100";
}