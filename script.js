let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("success").innerHTML = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let mobile = document.getElementById("mobile").value.trim();

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("confirmError").innerHTML="";
    document.getElementById("mobileError").innerHTML="";

    let valid = true;


    if(name.length < 3){
        document.getElementById("nameError").innerHTML="Enter at least 3 characters";
        valid = false;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        document.getElementById("emailError").innerHTML="Enter valid email";
        valid = false;
    }

    // Password Validation
    if(password.length < 6){
        document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
        valid = false;
    }

    // Confirm Password
    if(password !== confirmPassword){
        document.getElementById("confirmError").innerHTML="Passwords do not match";
        valid = false;
    }

    // Mobile Validation
    let mobilePattern = /^[0-9]{10}$/;

    if(!mobile.match(mobilePattern)){
        document.getElementById("mobileError").innerHTML="Enter valid 10-digit mobile number";
        valid = false;
    }

    if(valid){
        document.getElementById("success").innerHTML="Registration Successful!";

        setTimeout(function(){
            window.location.href = "index2.html";
        }, 500);
        
        
    }

});