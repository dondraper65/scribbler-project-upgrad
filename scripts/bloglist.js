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

var deleteModal = document.getElementById("deleteModal");

var revert = document.getElementById("revert-btn");
var deleteBtn1 = document.getElementsByClassName("garbage")[0];
var deleteBtn2= document.getElementsByClassName("garbage")[1];
var deleteBtn3 = document.getElementsByClassName("garbage")[2];
var deleteBtn4 = document.getElementsByClassName("garbage")[3];
var deleteBtn5 = document.getElementsByClassName("garbage")[4];
    
deleteBtn1.onclick = function(){
        deleteModal.style.display = "block";
}

deleteBtn2.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn3.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn4.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn5.onclick = function(){
    deleteModal.style.display = "block";
}


revert.onclick = function() {
    deleteModal.style.display = "none";
}
