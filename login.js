function login() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    username.style.border = "";
    password.style.border = "";


    if(username.value === ""){
        username.style.border = "2px solid red";
    }

    if(password.value === ""){
        password.style.border = "2px solid red";
    }


    else if(password.value.length < 7){
        password.style.border = "2px solid red";
        alert("Password must be at least 7 characters");
    }

    else if(username.value !== "" && password.value.length >= 7){
        window.location.href = "welcome.html";
    }
}