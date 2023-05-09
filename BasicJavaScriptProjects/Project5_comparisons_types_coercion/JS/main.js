document.write(typeof "10");

document.write('number'+7);

document.write(2E310);

document.write(-2E310);

document.write(10>2);

document.write(2>10);

console.log(2+2);

console.log(365<1);

console.log(365==1);

console.log(365==365);

x=10;
y=10;
document.write(x===y);

a=10;
b='10';
document.write(a===b);

c='Rivera';
d='Rivera';
document.write(c===d);

document.write(5==5 && 10>4);

document.write(5==4 && 10>4);

document.write(5==4 || 10>4);

document.write(5==4 || 10<4);
function myFunction() {
    document.getElementById('test').innerHTML =0/0;
}

function notFunction() {
    document.getElementById('not').innerHTML = !(10>1);
}

function notNotFunction() {
    document.getElementById('notNot').innerHTML = !(5>10);
}

var arguments=argue
document.write(arguments)
//document.getElementById('test').innerHTML=isNaN('this is a string');

//document.getElementById('test').innerHTML=isNaN('007');

