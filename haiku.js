$(document).ready(function () {
    $("button#add").on("click", addWord);
});
$(document).ready(function () {
    $("button#generateHaiku").on("click", generateHaiku);
});

var words = [
    ["I","am","not","an","oaf"],// 1 syllable
    ["bobby","johhny","orange","doggy"],//2 syllable
    ["savagely","angrily","katara","boomerang"],//3 syllable
    ["devilishly","dimensional"],//4 syllable
    ["kaleidoscopic","supernatural"],//5 syllable
    ["Utilization","Diver","interdimensional"],//6 syllable
    ["unconventionality","categorematical"]
]; //Create a global 2 dimensional array

function addWord() {
    //First get users word and check if it's valid
    let userWord = $("#addedWord").val();
    if(userWord.split("-").length > 7 | userWord.split("-").length < 1){
        alert("Please reload page, you have entered an illegal word, or no word at all");
    }
    let wordLen = userWord.split("-").length;
    words[wordLen-1].push(userWord.replaceAll('-', '')); //Adds new user inputted word to list
    $("span#toUser").text("You have successfully added a word to the dicionary:" + userWord.replaceAll('-','')+ " "+ wordLen + " syllables");
}

function generateHaiku() {
    let lineOneCount = 0;
    let lineTwoCount = 0;
    let lineThreeCount = 0;
    let lineOne = "";
    let lineTwo = "";
    let lineThree = "";
    //Line one creation
    while(lineOneCount < 5){
        //Get how much room we have left
        let remainingSyllables = 5-lineOneCount;
        let randNumber = 100;
        while(randNumber > remainingSyllables){
            randNumber =(Math.floor(Math.random() * 5) + 1);
        }
        lineOne += words[randNumber-1][Math.floor(Math.random()*words[randNumber-1].length)] + " ";
        lineOneCount += randNumber;
    }
    //Line two creation
    while(lineTwoCount < 7){
        //Get how much room we have left
        let remaining2Syllables = 7-lineTwoCount;
        let rand2Number = 100;
        while(rand2Number > remaining2Syllables){
            rand2Number =(Math.floor(Math.random() * 7) + 1);
        }
        lineTwo += words[rand2Number-1][Math.floor(Math.random()*words[rand2Number-1].length)] + " ";
        lineTwoCount += rand2Number;
    }
    //Line three creation
    while(lineThreeCount < 5){
        //Get how much room we have left
        let remaining3Syllables = 5-lineThreeCount;
        let rand3Number = 100;
        while(rand3Number > remaining3Syllables){
            rand3Number =(Math.floor(Math.random() * 5) + 1);
        }
        lineThree += words[rand3Number-1][Math.floor(Math.random()*words[rand3Number-1].length)] + " ";
        lineThreeCount += rand3Number;
    }
    $("span#firstLine").text(lineOne);
    $("span#secondLine").text(lineTwo);
    $("span#thirdLine").text(lineThree);
    $(".output").show();
}