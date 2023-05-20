var c=document.getElementById("circle");
var ctx=c.getContext("2d");
var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, 'Red');
grd.addColorStop(1, 'black');

ctx.fillStyle=grd;
ctx.fillRect(0,0,500,500);
ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();
