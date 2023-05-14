var x=10;
function addNumbers1(){
    document.write(20+x+"<br>");
}
function addNumbers2(){
    document.write(x+100+"<br>");
}
addNumbers1();
addNumbers2();

if (1<2){
    document.write("The left number is smaller than the number on the right.")
}

function getDate(){
    if (new Date().getHours()>18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}