const closeInputBTN = document.getElementsByClassName("closeInputbtn");

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showUnameInput() {
    document.getElementById("username-value").style.display = "none";
    document.getElementById("unameInput").style.display = "block";
    closeInputBTN[0].style.display = "block";
    document.getElementById("saveBtn").style.display = "block";
}

function showNameInput() {
    document.getElementById("name-value").style.display = "none";
    document.getElementById("nameInput").style.display = "block";
    closeInputBTN[1].style.display = "block";
    document.getElementById("saveBtn").style.display = "block";
}

function showTextArea() {
    document.getElementById("bio").style.display = "none";
    document.getElementById("bioInput").style.display = "block";
    document.getElementById("charCount").style.display = "block";
    closeInputBTN[2].style.display = "block";
    document.getElementById("saveBtn").style.display = "block";
}

function showMedia() {
    document.getElementById("plusIcon").style.display = "none";
    document.getElementById("mediaTags").style.display = "block";
    document.getElementById("mediaInput").style.display = "block";
    document.getElementById("plusIcon2").style.display = "block";
    closeInputBTN[3].style.display = "block";
    document.getElementById("saveBtn").style.display = "block"; 
}

function closeInput (x) {
    closeInputBTN[x].style.display = "none";
    if(x == 0) {
        document.getElementById("unameInput").value = "";
        document.getElementById("username-value").style.display = "block";
        document.getElementById("unameInput").style.display = "none";
        document.getElementById("saveBtn").style.display = "none";
    } else if(x == 1) {
        document.getElementById("nameInput").value = "";
        document.getElementById("name-value").style.display = "block";
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("saveBtn").style.display = "none";
    } else if(x == 2) {
        document.getElementById("bioInput").value = "";
        document.getElementById("bio").style.display = "block";
        document.getElementById("bioInput").style.display = "none";
        document.getElementById("charCount").style.display = "none";
        document.getElementById("saveBtn").style.display = "none";
    } else {
        document.getElementById("plusIcon").style.display = "block";
        document.getElementById("mediaTags").style.display = "none";
        document.getElementById("mediaInput").style.display = "none";
        document.getElementById("plusIcon2").style.display = "none";
        document.getElementById("saveBtn").style.display = "none"; 
    }
}

function showCharLength() {
    var bioVal = document.getElementById("bioInput").value;
    var bioValLength = bioVal.length;
    document.getElementById("charCount").innerHTML = "Count: " + bioValLength + "/150";
}
