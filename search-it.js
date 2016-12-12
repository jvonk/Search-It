var longestOutput = 5;
var font = createFont("monospace");
var drawBars = false;
var inputs = [
    "What is my name", 
    "Say something!", 
    "I am a cat, what do I say?", 
    "I am a dog", 
    "Hello how do you feel", 
    "How do you feel", 
    "Thank you", 
    "Search it"
];
var answers = [
    ["                         I don't know"], 
    ["                              Woof!!!"], 
    ["                                 Meow"], 
    ["                                 Woof"],
    ["                         Fine I guess"], 
    ["                                 Fine"], 
    ["                         Your Welcome"], 
    ["                            Search It"]
];


var rewind = 9;
var x = 41;
var y = -117;
var logo = -32;
var show = 0;
textFont(font, 12);
var input = "";
var wid = 300;
noFill();
color(255, 0, 0);

var search = function(inp) {
    
    var wordToCheck = inp;
    for (var i in inputs)
    {
        if (wordToCheck.toLowerCase() === inputs[i].toLowerCase())
        {
            return answers[i];
        }
    }
    return false;
};
var update = function(input, v0) {
    
    textSize(30);
    fill(0, 0, 255);
    text("S", -logo+x, 150+y);
    fill(255, 0, 0);
    text("E", -logo+x+20, 150+y);
    fill(255, 160, 0);
    text("A", -logo+x+20*2, 150+y);
    fill(0, 0, 255);
    text("R", -logo+x+20*3, 150+y);
    fill(0, 156, 68);
    text("C", -logo+x+20*4, 150+y);
    fill(255, 0, 0);
    text("H", -logo+x+20*5, 150+y);
    
    fill(255, 160, 0);
    text("I", -logo+x+20*7, 150+y);
    fill(0, 156, 68);
    text("T", -logo+x+20*8, 150+y);
    
    fill(0, 0, 255);
    text("!", -logo+x+20*10, 150+y);
    fill(255, 135, 135);
    text("!", -logo+x+20*11, 150+y);
    fill(255, 219, 161);
    text("!", -logo+x+20*12, 150+y);
    
    textSize(12);
    rewind++;
    if (mouseIsPressed && mouseY < 275+y && mouseY > 225+y) {
        if (rewind > 25) {
            
            if (drawBars === true) {
                
                drawBars = false;
                rewind = 0;
            } else {
                drawBars = true;
                rewind = 0;
            }
        }
    }
    line(0, 275+y, 400, 275+y);
    line(0, 225+y, 400, 225+y);
    fill(255, 0, 255);
    
    textSize(11);
    text("         Want to see the current options click here!!!\n     Please Add To The Questions And Then Save As Spinoff!!!\n                  If you copy give credit!!!", 0, 242.5+y);
    
    noFill();
    line(wid-x, 200+5+y, (200+(200-wid))-x*2, 200+5+y);
    rect((wid+5)-x, 210+y, ((200-(wid+5))*2)-x, -30);
    fill(158, 158, 158);
    text(input, (200+(200-wid))-x*2, 200+y);
    noFill();
    rect(270, 180+y, 115, 30);
    fill(255, 0, 0);
    text(" Click on screen", 276, 200+y);
};
var keyTyped = function() {
    if (keyCode !== 13) {
        input  = input + key.toString();    
    }
};
var draw = function() {
    var v0 = 0;
    var v1 = 0;
    background(255, 255, 255);
    if (mouseIsPressed) {
        show = 0;
        if (search(input) !== false) {
            fill(0, 0, 0);
            //text(search(input)[0], 0, 200+y, 400, 15);
            var jjj = [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]];
            for (var jj = 0; jj < round((search(input)[0].length)/37)+1; jj++) {
                for (var ii = 0; ii < 37; ii++) {
                    jjj[jj][ii] = search(input)[0][ii];
                }
                
            }
          
            var aaa = [""];
            for (var jj = 0; jj < jjj.length+1; jj++ ){
                
                for (var ii = 0; ii < jjj[0].length; ii++) {
                    aaa[jj] = aaa[jj]+jjj[0][ii];
                }
            }
            text(aaa[0], 10, 200+y);
            textSize(30);
            var inpu;
            var i = 0;
            for (var ii = 0; ii < search(input).length+1; ii++) {
                if (search(input)[ii] !== " " || i === 1) {
                    i = 1;
                    inpu = inpu+search(input)[ii];
                }
            }
            for (var ii = 0; ii < inpu.length; ii++) {
                text(inpu, -360, 400-(v1*35));
            }
        }
        else {
            fill(0, 0, 255);
            text("                    VOTE UP!!!", 50, 200+y);
            
            if (input !== "") {
                fill(0, 153, 0);
                text("?????????????????????????????????????????????????????????\n                        ADD IT!!!", 0, 375);
            }
        }
    }
    update(input, v0);     
};

