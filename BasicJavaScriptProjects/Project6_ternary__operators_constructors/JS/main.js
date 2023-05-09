function rideFunction(){
    var height, canRide;
    height=document.getElementById("height").value;
    canRide=(height<52) ? 'You are too short':'you are tall enough';
    document.getElementById('ride').innerHTML=canRide + ' to ride.';
}

function countFunction(){
    document.getElementById("counting").innerHTML = count();
    function count(){
        var startingPoint=9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}