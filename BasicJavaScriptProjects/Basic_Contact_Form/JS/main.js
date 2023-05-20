function validateForm(){
    let x = document.forms['myForm']['fName'].value;
    if (x==""){
        alert('First name must be filled out.');
        return false;
    }
    let y = document.forms['myForm']['lName'].value;
    if (y==""){
        alert('Last name must be filled out.');
        return false;
    }
    let z = document.forms['myForm']['eMail'].value;
    if (z==""){
        alert('E-Mail must be filled out.');
        return false;
    }
}
