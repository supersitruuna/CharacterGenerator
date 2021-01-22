//Eri rotujen, luokkien,alignmenttien ja motivaatioiden alustaminen

let coreRaces = ["a Dwarf", "an Elf", "a Gnome", "a Half Elf", "a Half Orc", "a Halfling", "a Human"];
let allRaces = ["a Dwarf", "an Elf", "a Gnome", "a Half Elf", "a Half Orc", "a Halfling", "a Human",
"an Aasimar", "a Catfolk", "a Dhampir", "a Drow", "a Fetchling", "a Gobin", "a Hobgoblin", "an Ifrit", "a Kobold", "an Orc", "an Oread", "a Ratfolk", "a Sylph", "a Tengu", "a Tiefling", "an Undine",
"a Changeling", "a Merfolk","a Druergar", "a Gillman", "a Grippli", "a Kitsune", "a Nagaji",  "a Samsaran", "a Strix", "a Suli", "a Svirfneblin", "a Vanara", "a Vishkanya", "a Wayangs"];
let classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard", "Alchemist", "Cavalier", "Gunslinger",
 "Inquisitor", "Magus", "Omdura", "Shifter", "Summoner", "Vampire Hunter", "Vigilante", "Witch"];
let alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil" ];
let motivations =["is motivated by money", "is composing the perfect song", "is trying to prove the world is flat", "is paying off a debt to a demon", "is feeling murderous", "is trying to find out what happened to their family", 
"is saving the bees", "is trying to achieve world peace", "is motivated by philosophy", "has committed insurance fraud", "wants to try all the ales of the word", "had a fling with a god", "is secretly three gnomes in a trench coat",
"can only speak in verse", "talks like a pirate", "is deathly afraid of butterflies", "was adopted by merfolk", "can't swim", "thinks they could fly if they tried hard enough", "is allergic to magic", "has never lied",
"likes all things shiny", "can't grow eyebrows", "has no sense of direction", "has a lower back tattoo", "can't stand the sound of babies crying", "obsessively keeps a diary", "has 16 siblings"];


//Elementtien haku
    //Painikkeet
let coreRaceBtn = document.getElementById("perusRotuBtn");
let allRacesBtn = document.getElementById("kaikkiRodutBtn");
let classBtn = document.getElementById("luokkaBtn");
let alignBtn = document.getElementById("suuntausBtn");
let traitBtn = document.getElementById("ominaisuusBtn");
let allBtn = document.getElementById("kaikkiBtn");
let resetBtn = document.getElementById("uusiBtn");

    //Tekstikentät
let raceTxt = document.getElementById("rotuTxt");
let classTxt = document.getElementById("luokkaTxt");
let alignmentTxt = document.getElementById("suuntausTxt");
let traitTxt = document.getElementById("ominaisuusTxt");
let resultField = document.getElementById("resultsBox");



//Painikkeiden toiminnallisuus
coreRaceBtn.addEventListener("click", function(){
    randomGeneration(coreRaces);
});
allRacesBtn.addEventListener("click", function(){
    randomGeneration(allRaces);
});
classBtn.addEventListener("click", function(){
    randomGeneration(classes);
});
alignBtn.addEventListener("click", function(){
    randomGeneration(alignments);
});
traitBtn.addEventListener("click", function(){
    randomGeneration(motivations);
});
allBtn.addEventListener("click", function(){
    randomGeneration(allRaces);
    randomGeneration(classes);
    randomGeneration(alignments);
    randomGeneration(motivations);
});
resetBtn.addEventListener("click", function(){
    startGenerator();
});

//Sivun alustus
window.onload = function (){
    this.startGenerator();
}

//Funktiot
    //Alustusfunktio
function startGenerator(){
    resultField.style.visibility = "hidden";
    raceTxt.innerHTML = "<br>"; 
    classTxt.innerHTML = "<br>";
    alignmentTxt.innerHTML = "<br>";
    traitTxt.innerHTML = "<br>"; 
}
    //Painikkeiden käyttämä generaattori
function randomGeneration(feature){
    if (feature==coreRaces){
        var randomRaceCore = coreRaces[Math.floor(Math.random()*coreRaces.length)];
    raceTxt.innerHTML="Your character is " + "<b>"+randomRaceCore +"</b>";
    resultField.style.visibility = "visible";
    }

    else if (feature==allRaces){
            var randomRaceAll = allRaces[Math.floor(Math.random()*allRaces.length)];
            raceTxt.innerHTML="Your character is " + "<b>"+ randomRaceAll +"</b>,"; 
            resultField.style.visibility = "visible";
    }

    else if (feature==classes){
        var randomClass = classes[Math.floor(Math.random()*classes.length)];
    classTxt.innerHTML="who's class is " + "<b>"+ randomClass +"</b>,";  
    resultField.style.visibility = "visible";
    }

    else if (feature==alignments){
        var randomAlignment = alignments[Math.floor(Math.random()*alignments.length)];
        alignmentTxt.innerHTML="who's alignment is " + "<b>"+ randomAlignment +"</b>,";
        resultField.style.visibility = "visible";
    }

    else {
        var randomTrait = motivations[Math.floor(Math.random()*motivations.length)];
    traitTxt.innerHTML="and who " + "<b>"+ randomTrait +"</b>.";
    resultField.style.visibility = "visible";
    }
}