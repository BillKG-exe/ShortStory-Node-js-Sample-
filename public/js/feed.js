const heart = document.getElementsByClassName('fa-heart-o');
const fullHeart = document.getElementsByClassName('fa-heart');
const content = document.getElementsByClassName('content');
const postTile = document.getElementsByClassName('postTitle');
const feature = document.getElementsByClassName('feature');
const titleSpan = document.getElementById('titleSpan');
var likeClickCount = 1;

function like(index) {
    heart[index - 1].style.display = "none";
    fullHeart[index - 1].style.display = "block";
    fullHeart[index - 1].style.color = "crimson";
}

function likeClick(index) {
    console.log(likeClickCount);
    if(likeClickCount % 2 != 0) {
        heart[index - 1].style.display = "none";
        fullHeart[index - 1].style.display = "block";
        fullHeart[index - 1].style.color = "crimson";
        console.log('open')
    } else {
        fullHeart[index - 1].style.display = "none";
        heart[index - 1].style.display = "block";
        console.log('close')
    }
    likeClickCount++;
    console.log(likeClickCount)
}

function viewMode() {
    var turnOffHeader = document.querySelector('header');
    var turnOffMain = document.querySelector('main');
    var readingView = document.getElementById('readingView');
    turnOffHeader.style.display = "none";
    turnOffMain.style.display = "none";
    readingView.style.display = "block";
}

function shutViewModeDown() {
    var turnOffHeader = document.querySelector('header');
    var turnOffMain = document.querySelector('main');
    var readingView = document.getElementById('readingView');
    turnOffHeader.style.display = "block";
    turnOffMain.style.display = "block";
    readingView.style.display = "none";
}

function cardExpand(index) {
    content[index - 1].style.height = "150px";
    content[index - 1].style.backgroundColor = "#FBF8F6";
    content[index - 1].style.transitionDuration = "0.3s";
    postTile[index - 1].style.fontSize = "25px";
    postTile[index - 1].style.lineHeight = "150px";
    postTile[index - 1].style.transitionDuration = "0.1s";
    feature[index - 1].style.display = "flex";
    feature[index - 1].style.transitionDuration = "0.5s";
}

function cardClose(index) {
    feature[index - 1].style.display = "none";
    content[index - 1].style.height = "50px";
    content[index - 1].style.backgroundColor = "white";
    postTile[index - 1].style.fontSize = "15px";
    postTile[index - 1].style.lineHeight = "0";
}

/*  .feedCard .content:hover {
    height: 150px;

    background-color: crimson;
    transition-duration: 0.5s;
}*/

/*  .postTitle:hover {
    font-size: 25px;
    line-height: 150px;
    align-self: center;
  }*/