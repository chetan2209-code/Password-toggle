let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let strengthBar = document.getElementById("strength-bar");
let strengthText = document.getElementById("strength-text");

// Password Show / Hide
eyeicon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "eye-close.png";
    }
};

// Password Strength Checker
password.addEventListener("input", function() {
    let val = password.value;
    
    if (val.length === 0) {
        strengthBar.style.width = "0%";
        strengthText.innerText = "";
    } else if (val.length < 6) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "#ef4444"; // Red
        strengthText.innerText = "Weak";
        strengthText.style.color = "#ef4444";
    } else if (val.length < 10 || !/[A-Z]/.test(val) || !/[0-9]/.test(val)) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "#eab308"; // Yellow
        strengthText.innerText = "Medium";
        strengthText.style.color = "#eab308";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "#22c55e"; // Green
        strengthText.innerText = "Strong";
        strengthText.style.color = "#22c55e";
    }
});