/* 
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
console.log(wordBlanks); 
*/

/* 
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop[0];
myArray.pop(0);
console.log(myArray); 
*/

// Setup
/* var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
// console.log(outerWear); */  //var global sobrepoe a local, apesar da local carregar first

/* var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
console.log(sum); */

/* var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree(3);
addFive(3); */

var processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);