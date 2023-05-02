function changeColor(newColor){                     //assigns function name 'changeColor' with the parameter 'newColor'
    const elem = document.getElementById('swap');   //creates a constant called 'elem' with the id 'swap' 
    const str = document.getElementById('another'); //and 'str' with the id 'another'
    elem.style.color = newColor;                    //changes the style color of the const 'elem' to equal 'newColor'
    str.style.color = newColor;                     //changes the style color of the const 'str' to equal 'newColor'
}

function myFunction() {                                         //assigns the function name 'myFunction' with no parameters
    var sentence = 'I am learning';                             //creates a variable called 'sentence' and sets it to 'I am learning'
    sentence += ' a lot from this book!';                       //takes the variable 'sentence' and concatenates a second string to the first
    document.getElementById('concatenate').innerHTML = sentence;//tells the document to get the element 'sentence' by using the id 'concatenate and to change the HTML to = 'sentence'
}