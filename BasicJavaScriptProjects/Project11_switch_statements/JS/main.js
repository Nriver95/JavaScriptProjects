function colorFunction(){
    var colorOutput;
    var colors=document.getElementById('colorInput').value;
    var colorString=' is a great color!';
    switch(colors){
        case 'Red':
            colorOutput='Red'+colorString;
        break;
        case 'Yellow':
            colorOutput='Yellow'+colorString;
        break;
        case 'Green':
            colorOutput='Green'+colorString;
        break;
        case 'Blue':
            colorOutput='Blue'+colorString;
        break;
        case 'Pink':
            colorOutput='Pink'+colorString;
        break;
        case 'Purple':
            colorOutput='Purple'+colorString;
        break;
        default:
        colorOutput='Please enter a color exactly as written on the list above.';
    }
    document.getElementById('output').innerHTML=colorOutput;
}