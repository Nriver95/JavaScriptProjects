function additionFunction() {   //example of addition
    var addition = 2+2;
    document.getElementById('math').innerHTML='2+2=' + addition;
}

function subtractionFunction() {//example of subtraction
    var subtraction = 0-0;
    document.getElementById('sub').innerHTML='0-0=' + subtraction;
}

function multiplyFunction() {   //example of multiplication
    var multiplication = 1*1;
    document.getElementById('multiply').innerHTML='1*1=' + multiplication;
}

function divideFunction() {     //example of division 
    var division = 1/1;
    document.getElementById('divide').innerHTML='1/1=' + division;
}

function justMathFunction() {   //example of combining multiple math operators
    var justMath = (99-1)*420 / 68 + 7;
    document.getElementById('arithmetic').innerHTML='(99-1)*420 / 68 + 7=' + justMath;
}

function mostMathFunction() {   //example of using the modulus operator
    var mostMath = 68%5;
    document.getElementById('moreMath').innerHTML='68/5 gives you a remainder of: ' + mostMath;
}

function justNumberFunction() { //example of using the negation operator
    var x = 68;
    document.getElementById('number').innerHTML= - x;
}

var a = 8;
a--;
document.write(a);

var b = 99;
b++;
document.write(b);

window.alert(Math.random() * 7);

function roundFunction() { //example of using the rounding function with the PI object.
    var round = Math.PI ;
    document.getElementById('roundMath').innerHTML= Math.round(round);
}
