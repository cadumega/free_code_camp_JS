/* 
*)Store Multiple Values in one Variable using JavaScript Arrays 

With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

var sandwich = ["peanut butter", "jelly", "bread"]

ex)Modify the new array myArray so that it contains both a string and a number (in that order).
r)
var myArray = ["Carlos", 30];


*)Nest one Array within Another Array
You can also nest arrays within other arrays, like below:

[["Bulls", 23], ["White Sox", 45]]
This is also called a multi-dimensional array.

ex)Create a nested array called myArray.
r)// Only change code below this line
var myArray = [["Carlos", 30], ["Carol",27]];


*)Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.
Example

var array = [50,60,70];
array[0];
var data = array[1];
//array[0] is now 50, and data has the value 60.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

ex)Create a variable called myData and set it to equal the first value of myArray using bracket notation.

r)
var myArray = [50,60,70];
var myData = myArray[0];

ex2)var arr = ["Programming", 123, "Coding", 789];

var firstElem = arr[0]; // This is "Programming"
var thirdElem = arr[2]; // This is "Coding"
var fourthElem = arr[3]; // This is 789
Notice that the length of the array is 4, and the position of the last element of the array is 3.

*)Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15;
//ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

ex) Modify the data stored at index 0 of myArray to a value of 45.
r)// Setup
var myArray = [18,64,99];
myArray[0] = 45;


*)Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
//arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

ex)Using bracket notation select an element from myArray such that myData is equal to 8.

r)          //    0         1       2           3 
            //  0 1 2    0 1 2    0 1 2     0  1  2    3   4
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

*) Manipulate Arrays With push()      //add
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

//arr1 now has the value [1, 2, 3, 4] and ,
//arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

ex) Push ["dog", 3] onto the end of the myArray variable.

r)// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

*) Manipulate Arrays With pop()   // remove last element
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

ex) Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray. myArray should only contain [["John", 23]].

r)// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

ex2)var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

*)Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

ex)Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
r)// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

/*)Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Example:

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

//After the shift, ourArray would have the value ["J", "cat"]. 
//After the unshift, ourArray would have the value ["Happy", "J", "cat"].

ex)Add ["Paul",35] to the beginning of the myArray variable using unshift().
r)
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

*)Shopping List
var myList = [["Chocolate Bar", 15], ["Banana Bar", 1],["Maça Bar", 15],["Pera Bar", 15],["Açai Bar", 15]];

*/