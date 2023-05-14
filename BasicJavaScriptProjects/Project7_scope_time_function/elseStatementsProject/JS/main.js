function ageFunction(){
    Age=document.getElementById("Age").value;
    if(Age>=18){
        Vote="You are old enough to vote!";
    }
    else{
        Vote="You are not old enough to vote!";
    }
    document.getElementById("howOldAreYou?").innerHTML=Vote;
}

function timeFunction(){
    var time=new Date().getHours();
    var reply;
    if(time<12==time>0){
        reply="It is afternoon.";
    }
    else if (time>=12==time<18){
        reply="It is afternoon.";
    }
    else{
        reply="It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML=reply;
}