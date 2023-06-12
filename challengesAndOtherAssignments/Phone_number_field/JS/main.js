function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["cell"].value;
    if (x==""){
        alert("Please fill out all fields.");
        return false;
    } else if (y==""){
        alert("please fill out all fields.");
        return false;
    } else if (z==""){
        alert("Please fill out all fields.");
        return false;
    }
}