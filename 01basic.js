// Understanding Case Sensitivity in Variables

/* Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;   

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments   // Atribuições de variáveis
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

r)
var sum = 10 + 10;
var product = 8 * 10;
var quotient = 66 / 33;

*)Increment a Number with JavaScript
You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;

ex) Change the code to use the ++ operator on myVar.    make the result equal to = 88
var myVar = 87;    
// Only change code below this line:
r) myVar++;

*)Decrement a Number with JavaScript
You can easily decrement or decrease a variable by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
ex) Change the code to use the -- operator on myVar. myVar should equal 10.
var myVar = 11;
// Only change code below this line
r) myVar--;


*) Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
var ourDecimal = 5.7;
// Only change code below this line
var myDecimal = 5.70;

ex)Change the 0.0 so that product will equal 5.0. Let's multiply two decimals together to get their product.
var product = 2.0 * 2.5;

ex)Change the 0.0 so that quotient will equal to 2.2.
var quotient = 4.4 / 2.0; 

*)The remainder operator % gives the remainder of the division of two numbers.
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)                      // Resto

Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)


Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
The variable remainder should be initialized. The value of remainder should be 2.

r)var remainder = 11 % 3;

*) Compound Assignment With Augmented Addition
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

var myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console.

ex)Convert the assignments for a, b, and c to use the += operator.
var a = 3;
var b = 17;
var c = 12;

a should equal 15.
b should equal 26.
c should equal 19.

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;

r)
a += 12;
b += 9;
c += 7;

ex)Convert the assignments for a, b, and c to use the -= operator.
a should equal 5.
b should equal -6.
c should equal 2.
You should use the -= operator for each variable.
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;

r)
a -= 6;
b -= 15;
c -= 1;

The *= operator multiplies a variable by a number.

myVar = myVar * 5;
will multiply myVar by 5. This can be rewritten as:

myVar *= 5;

ex) a should equal 25. b should equal 36. c should equal 46.
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;

r)
a *= 5;
b *= 3;
c *= 10;

ex)a should equal 4.  b should equal 27.  c should equal 3. You should use the /= operator for each variable.
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;

r)
a /= 12;
b /= 4;
c /= 11;


*)Declare String Variables
var myName = "your name";

ex) Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
r)
const myFirstName = "Carlos";
const myLastName = "Mega";

*)Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

var sampleStr = "Alan said, \"Peter is learning JavaScript

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".
Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes".
r)
var myStr ="I am a \"double quoted\" string inside \"double quotes\".";
/= I am a "double quoted" string inside "double quotes".

var myStr = 'I am a "double quoted" string inside "double quotes".';
var otherStr = "I am a 'single quoted' string inside 'single quotes'.";
var noEscapeSingle = "There is no need to 'escape' the single quotes.";
var noEscapeDouble = 'There is no need to "escape" the double quotes.';

*)Quoting Strings with Single Quotes
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

conversation = 'Finn exclaims to Jake, "Algebraic!"';
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"';

ex)Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters. You should remove all the backslashes (\). You should have two single quotes ' and four double quotes ".
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

r) 
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


*)Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine

ex)You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
r)
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
var myStr = “FirstLine\n\SecondLine\\rThirdLine”;

*)Concatenating Strings with Plus Operator
Example:
'My name is Alan,' + ' I concatenate.'
Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

var ourStr = "I come first. " + "I come second.";
The string I come first. I come second. would be displayed in the console.

ex) Build myStr from the strings This is the start. and This is the end. using the + operator.
var myStr ='This is the start.' + ' This is the end.';

*)Concatenating Strings with the Plus Equals Operator
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:
var ourStr = "I come first. ";
ourStr += "I come second.";

ourStr now has a value of the string: 
I come first. I come second..

ex)Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the editor. Start by assigning the first string to myStr, then add on the second string.

r)
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

*)Constructing Strings with Variables
ex)Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

r)var myName = "Carlos";
var myStr = "My name is" + myName + "and I am well.";

*)Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.

ex)Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

r) var someAdjective = "Pretty";
var myStr = "Learning to code is ";
myStr += someAdjective;

*) Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length); 
// The value 10 would be displayed in the console.

For example, if we created a variable var firstName = "Charles", we could find out how long the string Charles is by using the firstName.length property.

ex)Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
lastNameLength = lastNameLength;

*)Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

var firstName = "Charles";
var firstLetter = firstName[0];
firstLetter would have a value of the string C.

ex)Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

Hint: Try looking at the example above if you get stuck.
r)
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

*)Understand String Immutability
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job";

ex)Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
r)// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";

*)Use Bracket Notation to Find the Nth Character in a String
ou can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
//secondLetterOfFirstName would have a value of the string d.

ex)Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck.

r)// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2];

*) In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];
//lastLetter would have a value of the string s.

ex)Use bracket notation to find the last character in the lastName variable.
Hint: Try looking at the example above if you get stuck.
r)// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length -1] ;

*)Use Bracket Notation to Find the Nth-to-Last Character in a String
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

Example:

var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string l.

ex)Use bracket notation to find the second-to-last character in the lastName string.
Hint: Try looking at the example above if you get stuck.

r)// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length -2];

*) Word Blanks - "Mad Libs"
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
console.log(wordBlanks);


*/

