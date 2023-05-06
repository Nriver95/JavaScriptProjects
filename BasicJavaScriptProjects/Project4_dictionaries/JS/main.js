function monsterList(){         //creates function called monsterList
    var monster={               //creates our dictionary variable called monster
        family:'bird wyvern',   //addes key value pairs
        species:'Yian Kut-ku',
        size:'small',
        element:'fire',
        weakness:'water',
    };
    delete monster.species;     //deletes the kvp defined by 'species'
    document.getElementById("dictionary").innerHTML = monster.species;  //allows the html doc to get the element 'species' found within the variable 'monster' and writes it in the place using the id 'dictionary'
}