var signupModal = document.getElementById("signupModal");
var signupBtn = document.getElementById("signupButton");
var signupClose = document.getElementsByClassName("close")[0];
var signupAnchor = document.getElementById("signup-anchor");

signupAnchor.onclick = function(){
    signinModal.style.display = "none";
    signupModal.style.display = "block"
}

signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

signupClose.onclick = function(){
    signupModal.style.display = "none";
}



var signinModal = document.getElementById("signinModal");
var signinBtn = document.getElementById("signinButton"); 
var signinClose = document.getElementsByClassName("close")[1];

signinBtn.onclick = function(){
    signinModal.style.display = "block";
}

signinClose.onclick = function(){
    signinModal.style.display = "none";
}

window.onclick = function(){
    if(event.target === signinModal){
        signinModal.style.display = "none";
    }
}

var editsaveBtn = document.getElementById("edit-btn");

editsaveBtn.onclick = function(){
    if (editsaveBtn.innerHTML === "Edit"){
        document.getElementById("main-para").contentEditable = "true";
        document.getElementById("main-para").style.border = "2px solid rgba(170, 170, 170, 0.5)";
        document.getElementById("main-heading").contentEditable = "true";
        document.getElementById("main-heading").style.border = "2px solid pink";
        editsaveBtn.innerHTML = "Save";
    } else {
        document.getElementById("main-para").contentEditable = "false";
        document.getElementById("main-para").style.border = 0;
        document.getElementById("main-heading").contentEditable = "false";
        document.getElementById("main-heading").style.border = 0;
        editsaveBtn.innerHTML = "Edit";
    }
}

var likeBtn = document.getElementById("like-btn");
var likePara = document.getElementById("like-para")

let likeCount = 0;

likeBtn.onclick = function(){
    if (likeBtn.innerHTML === "Like"){
        likeBtn.innerHTML = "Liked!";
        likeCount ++;
        likePara.innerHTML = "1 person likes this!" 
    } else {
        likeCount++;
        likePara.innerHTML = `${likeCount} people like this!`;
    }
}