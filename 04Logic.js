/* 
*)Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

ex) Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.

r)function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed; 

}

var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Code Explanation
Push item at the end of arr.
Call the shift() method on arr to get the first item and store it in removed.
Return removed.


*)Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

ex)Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

r)function welcomeToBooleans() {
  return true;
}


*)Use Conditional Logic with If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);
test(false);

//test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

ex)Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.trueOrFalse should be a function

r)function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true";
  } 
  return "No, that was false";
}

*)Comparison with the Equality Operator
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. 
Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}

If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1
1   ==  2
1   == '1'
"3" ==  3
In order, these expressions would evaluate to true, false, true, and true.

ex) Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

r)// Setup
function testEqual(val) {
  if (val == 12 ) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

*)Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3
3 === '3'
//These conditions would return true and false respectively.

In the second example, 3 is a Number type and '3' is a String type.

ex) Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7

r)// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

*)Practice comparing different values
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.

ex) The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

r)// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

*)Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
In order, these expressions would evaluate to true, false, false, false, and false.

ex) Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

r)// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

*)Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3
3 !== '3'
4 !==  3
In order, these expressions would evaluate to false, true, and true.

ex) Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

r)// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

*)Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3
7   > '3'
2   >  3
'1' >  9
In order, these expressions would evaluate to true, true, false, and false.

ex) Add the greater than operator to the indicated lines so that the return statements make sense.

r)function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

*)Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
In order, these expressions would evaluate to true, true, false, and false.

ex) Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

r) function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >=10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

*)Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
In order, these expressions would evaluate to true, true, false, false, and false.

ex) Add the less than operator to the indicated lines so that the return statements make sense.
r) function testLessThan(val) {
  if (val <25) { 
    return "Under 25";
  }

  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

*)Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
In order, these expressions would evaluate to true, true, true, false, and false.

ex) Add the less than or equal to operator to the indicated lines so that the return statements make sense.

r)function testLessOrEqual(val) {
  if (val <= 12) { 
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

*)Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

ex)Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

r)
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

// Change this value to test
testLogicalAnd(10);

*)Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

ex)Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

R)//O código acima retornará “Fora” somente se val estiver entre 10 e 20 (inclusive).

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);



*/