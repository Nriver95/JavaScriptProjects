let activePlayer='X';       //tracks whose turn it is

let selectedSquares=[];     //stores moves in an array which will determine win condition

function placeXOrO(squareNumber){   //used forplacing an x or o in a square
//the condition below ensures a square hasn't been selected already
//.some() method is used to check each element of the selectSquare array
//to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))){

        let select = document.getElementById(squareNumber);//retreives the HTML element id that was clicked.

        if (activePlayer === 'X'){//checks who's turn it is

            select.style.backgroundImage = 'url("./images/cross.png")';//if activePlayer is equal to 'X' then the cross.png is placed

        } else{

            select.style.backgroundImage= 'url("./images/ring.png")';//if activePlayer is equal to 'O' then the ring.png is placed.
        }

        selectedSquares.push(squareNumber + activePlayer);//squareNumber and activePlayer are concatenated together and added to the array.

        checkWinConditions();//calls funtion to check win conditions

        if(activePlayer ==='X'){//checks to see who the active player is and changes it 'X' to 'O' and vice versa

            activePlayer = 'O';

        } else{//if activePlayer is anything other than 'X' it will be changes to 'X'

            activePlayer='X';
        }

        audio('./media/place.mp3');//this plays placement sound.

        if (activePlayer === 'O'){//checks to see if computer is the activePlayer

            disableClick();//this disables clicking during the computers turn.

            setTimeout(function (){computersTurn(); }, 1000);//this waits 1 second before the computer places an image and enables click again.
        }
        return true;    //returning true is needed for our computersTurn() function to work.

    }

    function computersTurn(){//this function is for the computers turn to select a random square

        let success = false;//boolean needed for the while loop

        let pickASquare;//bariable will store a random number 0-8

        while (!success){//this condition allows the loop to keep trying if a square is already selected

            pickASquare = String(Math.floor(Math.random() * 9));//this selects a random number between 0 and 8

            if (placeXOrO(pickASquare)){//if the random number evaluated returns true, the square hasn't been selected yet.

                placeXOrO(pickASquare);//this line calls the function

                success = true;//changes the boolean and ends the loop.
            };
        }
    }
}

function checkWinConditions(){//This function parses the selectedSquares array to search for win conditions.
                              //drawLine() function is called to draw a line on the screen if the win condition is met.
    if (arrayIncludes('0X','1X', '2X')) {drawWinLine(50,100,558,100)}//1

    else if (arrayIncludes('3X','4X', '5X')) {drawWinLine(50,304,558,304)}//2

    else if (arrayIncludes('6X','7X', '8X')) {drawWinLine(50,508,558,508)}//3
    
    else if (arrayIncludes('0X','3X', '6X')) {drawWinLine(100,50,100,558)}//4

    else if (arrayIncludes('1X','4X', '7X')) {drawWinLine(304,50,304,558)}//5

    else if (arrayIncludes('2X','5X', '8X')) {drawWinLine(508,50,508,558)}//6

    else if (arrayIncludes('6X','4X', '2X')) {drawWinLine(100,508,510,90)}//7

    else if (arrayIncludes('0X','4X', '8X')) {drawWinLine(100,100,520,520)}//8

    else if (arrayIncludes('0O','1O', '2O')) {drawWinLine(50,100,558,100)}//9

    else if (arrayIncludes('3O','4O', '5O')) {drawWinLine(50,304,558,304)}//10

    else if (arrayIncludes('6O','7O', '8O')) {drawWinLine(50,508,558,508)}//11

    else if (arrayIncludes('0O','3O', '6O')) {drawWinLine(100,50,100,558)}//12

    else if (arrayIncludes('1O','4O', '7O')) {drawWinLine(304,50,304,558)}//13

    else if (arrayIncludes('2O','5O', '8O')) {drawWinLine(508,50,508,558)}//14

    else if (arrayIncludes('6O','4O', '2O')) {drawWinLine(100,508,510,90)}//15

    else if (arrayIncludes('0O','4O', '8O')) {drawWinLine(100,100,520,520)}//16


    else if (selectedSquares.length >= 9){//this condition checks for a tie. if none of the above conditions are met and 9 squares are selected the code executes.

        audio('./media/tie.mp3');//function plays the tie game sound.

        setTimeout(function (){resetGame();}, 500);//function sets a .3 second timer before the resetGame is called.
    }

    function arrayIncludes(squareA, squareB, squareC){//checks if the array includes 3 strings. it is used to check for each win condition.

        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array then true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true){ return true;}
    }
}


function disableClick(){    //this function makes our body element temporarily unclickable.

    body.style.pointerEvents = 'none';//this makes the body unclickable

    setTimeout(function(){body.style.pointerEvents = 'auto';}, 1000);//this makes the body clickable again after 1 second
}

function audio(audioURL) {//function takes a string parameter of the path set earlier for placement sound ('./media/place.mp3')
    let audio = new Audio(audioURL);//create a new audio object and we pass the path as a parameter

    audio.play();//play method plays our audio sound
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){//this function uses HTML canvas to draw the win line

    const canvas = document.getElementById('win-lines');//this line accesses the HTML canvas element

    const c = canvas.getContext("2d");//this line gives access to methods and properties to use on canvas

    let x1 = coordX1,//these indicate where the start of each axis is.
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,//temporarily stores x axis data updated in the animation loop
        y = y1;//variable stores temporary y axis data up in the animation loop

    function animateLineDrawing() {//function interacts with canvas

        const animationLoop = requestAnimationFrame(animateLineDrawing);    //variable creates a loop

        c.clearRect(0, 0, 608, 608);//method clears content from last loop iteration

        c.beginPath();//this method starts a new path

        c.moveTo(x1,y1);//this moves us to a starting point in our line

        c.lineTo(x, y);//indicates the end point in our line

        c.lineWidth = 10;//sets the width of the line

        c.strokeStyle = 'rgba(70, 255, 33, .8)';//sets the color

        c.stroke();//this draws the line laid out above

        if (x1 <= x2 && y1 <= y2){//checks if endpoints were reached

            if (x < x2) { x += 10; }//adds 10 to the previous end x endpoint

            if (y < y2) { y += 10; }//adds 10 to the previous end y endpoint.


            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }//necessary condition check for 6,4,2 win condition. similar to the one above.
        }


        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }

    }

    function clear(){//clears the canvas after win line is drawn
        const animationLoop = requestAnimationFrame(clear);//starts animation loop

        c.clearRect(0, 0, 608, 608);//this line clears our canvas

        cancelAnimationFrame(animationLoop);//this line stops our animation loop
    }

    disableClick();//this line disallows clicking while win sound is playing

    audio('./media/winGame.mp3');

    animateLineDrawing();//calls main animation loop

    setTimeout(function () {clear(); resetGame(); }, 1000);//waits 1 second then clears canvas and resets the game while allowing clicking again.
}

function resetGame(){//function resets game if tied or there is a winner

    for (let i = 0; i < 9; i++){//iterates through each HTML square element.

        let square = document.getElementById(String(i));//this variable gets the HTML element i.

        square.style.backgroundImage = '';//removes the elements backgroundImage.
    }

    selectedSquares = [];//resets the array so it is empty and player can start over.
}