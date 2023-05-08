function watchFunction(){
    var age, canWatch;
    age=document.getElementById("age").value;
    canWatch=(age<18) ? 'You are too young':'you are old enough';
    document.getElementById('watch').innerHTML=canWatch + ' to watch this movie by yourself.';
}