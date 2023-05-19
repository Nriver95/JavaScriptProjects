function countToTen(){      //creates the function
    var digit="0";       //sets a variable
    var x=1;
    while (x<11){       //states that while the variable x is less than 11 it will perform the actions below
        digit+= "<br>"+x;//prints each number with a line break
        x++;            //adds one to x
    }
    document.getElementById("countingToTen").innerHTML=digit;//gives the id 'countingToTen' so the HTML doc can call the function and write each digit starting with 0
}


function lengthFunction(){
  var str=('words');
  var n=str.length;     //creates a variable that is set to the length of the character in the string of variable 'str'
  document.getElementById('printLength').innerHTML=n
}

var instruments=['guitar','drums','piano','violin','trumpet','flute'];//creates an array called 'instruments'
var content="";     //creates a variable that will act as the starting point for the text to be written into the HTML doc
var y;              //creates the variable y
function forLoop(){//creates a function that will take the variable y and set it to 0
    for (y=0; y<instruments.length; y++){//as long as y is less than the length of the elements in the array 'instruments' it will make y that element then continue to go through each one and set y to that
        content += instruments[y]+'<br>';//the starting point will be the whatever element the variable 'y' happens to be with a line break
    }
    document.getElementById('listOfInstruments').innerHTML=content;
}

function catPics(){
    var catPicture=[]//creates an array called catPicture and leaves it blank
    catPicture[0]="sleeping";//adds an element to the 0 position of the array catPicture
    catPicture[1]="playing";
    catPicture[2]="eating";
    catPicture[3]="purring";
    document.getElementById('cat').innerHTML='In this picture, the cat is '+catPicture[2]+'.';//allows the HTML doc to call the element from the function and uses the string in the [2] position on the array
}

function constantFunction(){
    const musicalInstrument={type:'guitar', brand:'fender', color:'black'}; //creates a constant 'musicalInstrument'
    musicalInstrument.color='blue';                     //changes the element 'color' within the constant 'musicalInstrument' to blue
    musicalInstrument.price='$900';                     //sets the element 'price' within the constant
    document.getElementById('constant').innerHTML='The cost of the '+ musicalInstrument.type +' was '+musicalInstrument.price;//allows the HTML doc to call the string with the specified elements from the constant
}

var u=82;
document.write("<br>"+u);//writes the line break and the variable value onto the HTML doc
{
    let u=33;       //creates a variable within the block
    document.write("<br>"+u);
}
document.write("<br>"+u);//rewrites the line with the value 82 because the value 33 only has a scope within the block it was written

function piFunction(){
    return Math.PI;//tells the computer to return the specified element whenever the function is called
}
document.getElementById('pi').innerHTML=piFunction();

let car={           //creates an object 'car' that has the attributes given to it in the lines below
    make:'dodge ',
    model:'Viper ',
    year:'2021 ',
    color:'red ',
    description:function(){     //creates the function 'description' that will return the string below with the elements found within 'this' variable 'car'
        return "The car is a "+this.year+this.color+this.make+this.model;
    }
};
document.getElementById('carObject').innerHTML=car.description();

    let number='';
    for (let i=0; i<10; i++){   //creates a loop that will function as long as the variable 'i', which is set to 0, is less than 10. It will add 1 after each loop
        if (i==3) continue;     //tells the loop to continue onto the next iteration and skip the line if 'i' is equal to 3
        if (i>7) break;         //will stop the loop if i is greater than the number 7
        number += i + "<br>";
    }
document.getElementById('breakContinue').innerHTML=number