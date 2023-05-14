function fullSentence(){        //defines function name
    var part1='I have ';        //creates variable containing a string
    var part2='made this ';
    var part3='into a complete ';
    var part4='sentence.';
    var wholeSentence=part1.concat(part2,part3,part4);//creates a variable that concatenates all the previous variables together
    document.getElementById('concatenate').innerHTML = wholeSentence;//allows the html doc to write the string from the function 
}

function sliceMethod(){
    var sentence='All work and no play makes Johnny a dull boy.';
    var section=sentence.slice(27,33);      //creates a variable that taks the string in the variable 'sentence' and uses only the characters in the positions specified.
    document.getElementById('slice').innerHTML = section;
}

function searchMethod(){
    var text='Mr. Blue has a blue house';
    var position=text.search('Blue');       //creates a variable that takes the string in 'text' and searches for the character position where the defined value is found.
    document.getElementById('search').innerHTML = position;
}

function upperCaseMethod(){
    var words='This is the method to make it uppercase.';
    var result=words.toUpperCase('method')  //creates a variable that takes the variable 'method' and converts all characters to uppercase.
    document.getElementById('upper').innerHTML = result;
}

function stringMethod(){
    var x=365;
    document.getElementById('numbersToString').innerHTML = x.toString();//takes the variable x and turns it into a string
}

function precisionMethod(){
    var y=12345.6789101112;
    document.getElementById('precision').innerHTML = y.toPrecision(9);  //takes the variable y and only displays the number of characters defined
}

function valueOfMethod(){
    var string='The valueOfMethod method.';
    var results= string.valueOf();      //used to take the string in the variable 'string' and turns it into it's primitive value. Can turn a string object into a regular string.
    document.getElementById('valueOf').innerHTML = results;
}

function toFixedMethod(){
    var num=3.14159;
    var n=num.toFixed(2);       //rounds the number to the specified number of decimals
    document.getElementById('fixed').innerHTML = n;
}

