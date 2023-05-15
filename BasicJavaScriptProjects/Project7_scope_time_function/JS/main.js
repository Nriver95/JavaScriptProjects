var x=10;           //creates variable x and sets it to the value 10
function addNumbers1(){ //creates a function addNumbers1 
    document.write(20+x+"<br>");    //the function will write the results of the math being done onto the index.html
}
function addNumbers2(){ //another function
    document.write(x+100+"<br>");
}
addNumbers1();  //executes the function
addNumbers2();

if (1<2){       //creates a conditional statement with the argument that the value 1 is less than the value 2.
    document.write("The left number is smaller than the number on the right." + "<br>")  //the if statement will perform the function defined here if it is true.
}

function getDate(){
    if (new Date().getHours()>18){      //creates a conditional statement to see if the time currently is greater than 18 or 1800 hours
        document.getElementById("Greeting").innerHTML="How are you today?";     //if the statement is true it will perform the function as called by the onclick attribute.
    }
}

function addNumbers3(){ //creates function
    var y=10;   //defines variable y
    document.write(20 + y + "<br>");    //defines a math problem to be solved and written onto the html doc
}
function addNumbers4(){
    document.write(y + 100);    //defines a math problem to be solved and the results written onto the html doc but the variable is not global and the function will not work.
}
addNumbers3();
addNumbers4();
//To solve the function I would move the variable defined within the function addNumbers3 and move it outside of any function so it will function globally.