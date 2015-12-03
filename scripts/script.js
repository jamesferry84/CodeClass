/**
 * Created by James on 03/12/2015.
 */

var myInput;
var userIdentifier = "person";
var characters = [];
var lesson;
var evalStatement;

function runUser() {
    evalStatement = "";

    for (var i = 0; i < myInput.length; i++) {
        var charResult = myInput[i].indexOf("//");

        if (charResult != -1) {
            evalStatement = evalStatement + myInput[i].substr(0, charResult);
        }
        else {
            evalStatement = evalStatement + myInput[i];
        }

        document.getElementById("console").value = "The input is valid";
        eval(evalStatement);
        checkLessonComplete();
    }
}

function toggleHelp() {
    $("#help").animate({width: 'toggle'});
    var text = document.getElementById("toggleHelpButton").value;

    if (text === "Show Instructions") {
        document.getElementById("toggleInstructionsButton").value = "Hide Instructions";
    }
    else {
        document.getElementById("toggleInstructionsButton").value = "Show Instructions";
    }
}

function getInput() {
    document.getElementById('console').innerHTML = "";
    var lines = editor.getValue().split('\n');
    myInput = [];

    myInput.push("/*jslint sloppy: true, newcap: true, plusplus: true, white:true, devel: true, eqeq: true, sub:true,*/");
    myInput.push("/*global log, character:true, createCharacter:true, drawToCanvas, canvas, editor, requestAnimFrame, Rect, Circle, SemiCircle, Text, FillColour, update:true*/");

    for (var i =0; i < lines.length; i++) {
        if (lines[i] !== "") {
            isInput = true;
        }
    }
    if (isInput === true) {
        validate(myInput);
    }
}