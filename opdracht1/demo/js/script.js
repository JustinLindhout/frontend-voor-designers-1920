/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

var blue = document.querySelectorAll("img.blue");
var green = document.querySelectorAll("img.green");
var yellow = document.querySelectorAll("img.yellow");
var red = document.querySelectorAll("img.red");

var button = document.querySelector("btnBlue");

btnBlue.addEventListener("click", function () {
			element.classList.toggle("greenhide", "yellowhide", "redhide");
}