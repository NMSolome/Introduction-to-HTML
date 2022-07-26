function validationForm() {
    let username1 = document.forms["SampleForm"]["fname"];
    let username2 = document.forms["SampleForm"]["lname"];
    let email = document.forms["SampleForm"]["Email"];
    let pass = document.forms["SampleForm"]["Password"];

    // var strUser1 = e.options[e.selectedIndex].text;
    // let nameerr = document.forms["RegForm"] ["nameerr"];

    if (username1.value == "") {
        alert("Please enter your first name");
        username1.style.border = "2px solid red";
        username1.innerHTML = "Please enter your first name"
        // username1.focus();
        return false;
    }
    else {
        username1.style.border = "2px solid green";
    }
    if (username2.value == "") {
        alert("Please enter your last name");
        username2.style.border = "2px solid red";
        username2.innerHTML = "Please enter your last name"
        // username2.focus();
        return false;
    }
    else {
        username2.style.border = "2px solid green";
    }
    if (email.value == "") {
        alert("Please enter your email");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter your email"
        // email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
        // alert("Please enter a valid email address");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter a valid email address"
        // email.focus();
        return false;
    }
    else {
        email.style.border = "2px solid green";
    }
    if (pass.value == "" || pass.value.length != 10) {
        alert("Please enter a valid password");
        pass.style.border = "2px solid red";
        // phone.focus();
        return false;
    }
    else {
        pass.style.border = "2px solid green";
    }

    var cb = document.getElementById("terms");
    if (!cb.checked) {
        alert("Please accept our terms and conditions");
        cb.focus();
        return false;
    }
    // Select validation
    var e = document.getElementById("select");
    var optionsSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;

    if (optionsSelIndex == 0) {
        alert("Please select your age bracket");
        return false;
    } else {
        alert("Success !! You have selected an age group : " + optionSelectedText);
    }

    // checkbox validation
var check = document.getElementById("flexRadioDefault1");
if (
    document.getElementById("flexRadioDefault1").checked == true || 
    document.getElementById("flexRadioDefault2").checked == true
) {
    alert("Welldone")
}else {
    alert("Please make a choice");
    check.focus()
    return false;
}
{
    window.location.href="./wellDone.html";
  }

}











    // let relate = document.forms["SampleForm"]["form-check2"];
    // if (relate == "") {
    //     alert("Please select marital status")
    //     relate.style.border = "2px solid red";
    //     relate.focus();
    //     return false;
    // } else {
    //     relate.style.border = "2px solid green";
    // }
    // Check box validation (! negates)




    // const relate = document.getElementsByName("form-check2");
    
    // if (cb != true) {
    //     alert("Please accept our terms and conditions");
    //     return false;
    // } else {
    //     (cb == true);
    //     return true
    //     cb.style.border = "2px solid green";


    // if (strUser == 0) {
    //     alert("Please select a user");
    // }

    // var e = document.getElementById("maritalStatus");
    // var strUser = e.options[e.selectedIndex].value;
    // var strUser1 = e.options[e.selectedIndex].text;
    // 


