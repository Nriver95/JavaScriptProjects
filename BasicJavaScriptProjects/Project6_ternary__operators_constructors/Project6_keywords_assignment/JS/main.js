function monster(Family, Size, Element, Weakness){
    this.monsterFamily=Family;
    this.monsterSize=Size;
    this.monsterElement=Element;
    this.monsterWeakness=Weakness;
}
var Rathalos=new monster("Flying Wyvern", "Large", "Fire", "Lightning");
var Great_Jaggi=new monster("Bird Wyvern", "Medium", "Lightning", "Fire");
var Alatreon=new monster("Elder Dragon", "Large", "Fire and Ice", "Lightning and Dragon");

function myFunction(){
    document.getElementById("keywordsAndConstructors").innerHTML=
    "The Rathalos is a " + Rathalos.monsterFamily + " and is " + Rathalos.monsterSize + ". It uses " + Rathalos.monsterElement + " and is weak to " + Rathalos.monsterWeakness + ".";
}