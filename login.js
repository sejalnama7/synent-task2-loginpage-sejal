 function validate() {
            var user = document.getElementById("email").value;
            var pass = document.getElementById("password").value;

            if (user === "" || pass === "") {
                alert("Please fill all the fields!");
                return false;
            }

            window.location.href = "welcome.html";
            return false; 
        }