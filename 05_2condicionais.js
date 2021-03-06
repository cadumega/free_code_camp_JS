/* 
*)Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

ex) Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta 

R)
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}
// Change this value to test
caseInSwitch(1);

r2)function caseInSwitch(val) {
var answer = “”;
switch (val){
case 1:
answer = “alpha”;
break;
case 2:
answer = “beta”;
break;
case 3:
answer = “gamma”;
break;
case 4:
answer = “delta”;
break;
}
return answer;
}

// Change this value to test
caseInSwitch(1);

*)Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

ex) Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

r)
function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

*)Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.


ex) 
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.

r)function sequentialSizes(val) {
  var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;

      case 4:
      case 5:
      case 6:
        return "Mid";
        break;

      case 7:
      case 8:
      case 9:
        return "High";
        break;
    }

  return answer;
}

sequentialSizes(1);

r2)function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
sequentialSizes(1);

*)Replacing If Else Chains with Switch
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}


ex) Change the chained if/else if statements into a switch statement.
//   if (val === "bob") {
//     answer = "Marley";
//   } else if (val === 42) {
//     answer = "The Answer";
//   } else if (val === 1) {
//     answer = "There is no #1";
//   } else if (val === 99) {
//     answer = "Missed me by this much!";
//   } else if (val === 7) {
//     answer = "Ate Nine";
//   }

r)
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}

r2)function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
chainToSwitch(7);

*/