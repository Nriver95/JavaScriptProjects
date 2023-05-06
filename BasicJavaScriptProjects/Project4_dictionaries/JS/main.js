function monsterList(){
    var monster={
        family:'bird wyvern',
        species:'Yian Kut-ku',
        size:'small',
        element:'fire',
        weakness:'water',
    };
    delete monster.species;
    document.getElementById("dictionary").innerHTML = monster.species;
}