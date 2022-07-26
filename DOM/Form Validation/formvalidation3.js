function validateForm() {
    let useremail = document.forms["form1"]["fEmail"];
    let password = document.forms["form1"]["fPassword"];
    // var minNumberofChars = 6;
    // var maxNumberofChars = 16;

    useremailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    passwordRegex = /^[a-zA-Z0-9!@#$%^&*]$/

    if (useremail.value == "" || !useremailRegex.test(useremail.value)) {
        useremail.style.border = "3px solid red";
        alert("Invalid email address! 😊😊");
        useremail.focus();
        return false;
    }
    else {
        useremail.style.border = "2px solid green";
    }

    // if (email.value.match(validRegex)) {
    //     alert("Valid email address!");
    //     username.style.border = "23px solid green";
    //     return true;
    // } else {
    //     alert("Invalid email address!");

    //     username.focus();
    // }
    // var regularExpression = /^[a-zA-Z0-9!@#$%^&*]$/;
    // if (password.value == "" || !passwordRegex.test(password.value)) {
    //     password.style.border = "2px solid red";
    //     alert("Please enter your password, must contain atleast one number and one special character ");
    //     password.focus();
    //     return false;
    // }
    // if(password.length < minNumberofChars){
    //     password.style.border = "2px solid red";
    //     alert("Your password is short 😩😩");
    //     password.focus();
    //     return false;
    // } 
    // if(password.length > maxNumberofChars){
    //     password.style.border = "2px solid red";
    //     alert("Your password is too long 😩😩");
    //     password.focus();
    //     return false;
    // }
    // else {
    //     password.style.border = "2px solid green";
    //     alert("Your password is in the acceptable range");
    // }

    function validatePassword() {
        var minNumberofChars = 6;
        var maxNumberofChars = 16;
        var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        alert(password);
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            return false;
        }
    //     if (!regularExpression.test(password)) {
    //         alert("password should contain atleast one number and one special character");
    //         return false;
    //     }
    // }

    // function validatePassword() {
    //     var p = password.value,
    //         errors = [];
    //     if (p.length < 6) {
    //         errors.push("Your password must be at least 6 characters");
    //     }
    //     if (p.length > 16) {
    //         errors.push("Your password must be at most 16 characters");
    //     }
    //     if (p.search(/[a-z]/i) < 0) {
    //         errors.push("Your password must contain at least one letter.");
    //     }
    //     if (p.search(/[0-9]/) < 0) {
    //         errors.push("Your password must contain at least one digit.");
    //     }
    //     if (p.search(/[!@#\$%\^&\*_]/) < 0) {
    //         errors.push("Your password must contain at least one character.");
    //     }
    //     if (errors.length > 0) {
    //         alert(errors.join("\n"));
    //         return false;
    //     }
    // }
      {
        return true;
        p.style.border = "2px solid green";
        alert("Your password is in the acceptable range");
    }
    // if (password.length >= 6 && password.length < 16) {
    //         password.style.border = "2px solid red";
    //         alert("Your password is short 😩😩");
    //         password.focus();
    //         return false;
    // }
    // minimum password length validation  
    //   if(password.length < 6) {  
    //     document.getElementById("exampleInputPassword1").innerHTML = "**Password length must be atleast 6 characters";  
    //     return false;  
    //  }  

    // //maximum length of password validation  
    //  if(password.length > 16) {  
    //     document.getElementById("exampleInputPassword1").innerHTML = "**Password length must not exceed 16 characters";  
    //     return false;  
    //  } else {  
    //     password.style.border = "2px solid green";
    //     alert("Password is correct"); }

    //     else {
    //     password.style.border = "2px solid green";
    //     alert("Your password is in the acceptable range");
    // }


    // if (password.length <= 6) {
    //     password.style.border = "2px solid red";
    //     password.innerHTML = "Your password is short 😩😩";
    //     password.focus();
    //     return false;
    // }

    // if (password.length > 16) {
    //     password.style.border = "2px solid red";
    //     password.innerHTML = "Your password is too long 😩😩";
    //     password.focus();
    //     return false;
    // }

    // if (password.value. length > 16) {
    //     password.style.border = "2px solid red";
    //     alert("Your password is too long 😩😩");
    //     password.focus();
    //     return false;
    // }
    // else {
    //     password.style.border = "2px solid green";
    //     alert("Your password is in the acceptable range");
    // }

    const cb = document.querySelector("exampleCheck1:checked");
    if (cb != true) {
        alert("Please accept our terms and conditions");
        return false;
    } else {
        (cb == true);
        return true
    }



    // if (
    //   password.length < minNumberofChars || // true || false
    //   password.length > maxNumberofChars
    // )
    var e = document.getElementById("select");
    var strUser = e.options[e.selectedIndex].value;

    var strUser1 = e.options[e.selectedIndex].text;
    if (strUser == 0) {
        alert("Please select a user");
    }
}
}
