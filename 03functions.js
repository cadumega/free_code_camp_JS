/* 
*)Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}

You can call or invoke this function by using its name followed by parentheses, like this: functionName(); 
Each time the function is called it will print out the message Hello World on the dev console. 

All of the code between the curly braces will be executed every time the function is called.

ex)1.Create a function called reusableFunction which prints "Hi World" to the dev console.
2.Call the function.

r)
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();


*)Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

ex)1.Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
2. Call the function with two numbers as arguments.
r)
function functionWithArgs(a,b) {
console.log(a+b);
}
functionWithArgs(1,2); 
functionWithArgs(7,9); 

*)Global Scope and Functions

ex)Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
myGlobal should be defined,myGlobal should have a value of 10,myGlobal should be declared using the var keyword,oopsGlobal should be a global variable and have a value of 5

R)// Declare the myGlobal variable below this line
var myGlobal=10;

function fun1(x) {   // Assign 5 to oopsGlobal Here
   x=5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output +=  "myGlobal:5 " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


R2)// Declare your variable here
var myGlobal=10;
oopsGlobal=5;
function fun1(oopsGlobal) {
  // Assign 5 to oopsGlobal Here
oopsGlobal;  
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



*)Local Scope and Functions // var local e var global

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line will throw an error, as loc is not defined outside of the function.

ex)The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

r)function myLocalScope() {

  var myVar ='test';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();                           //Scope=Alcance

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


*)Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

ex) Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

r)// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
console.log(outerWear);          //T-shirt irá salvar por cima da variável local sweater

*)Return a Value from a Function with Return

We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
//answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

ex) Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. timesFive(5) should return 25,timesFive(2) should return 10

R)function timesFive (num){
  return num * 5;
}

*)Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);

//addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

ex)Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

r)// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

var result = addFive(); // This is undefined

*)Assignment with a Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call sum function, which returns a value of 17 and assigns it to ourSum variable.

ex) Call the processArg function with an argument of 7 and assign its return value to the variable processed. processed should have a value of 2,

r) 
var processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);












*/

