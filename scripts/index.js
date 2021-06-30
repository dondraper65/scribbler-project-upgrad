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
