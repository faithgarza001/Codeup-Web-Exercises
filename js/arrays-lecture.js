// var pets = [];
//  pets[0]= "Toby";
//  pets[1]= "Princess";
//  pets[2]= "Samson";
//  pets[3]="Jill";
//  pets[4] ="Bubbles";
//  pets[5]= "Malu";
//
// //You now hold these multiple variables with arrays you have 2 pieces of info pointer and index,
//
// console.log(pets);
//for each
//**Multidimensional Array**
//object oriented
//write a for loop that will loop over array
//Example 1
// var pets = ["Toby", "Princess", "samson","Jill", "Bubbles", "Malu", "lily"]
//
// for (var i = 0;i<pets.length;i++){
//     console.log(pets[i]);
// }
//
// pets[pets.length] = "lily";
//
// console.log(pets[pets.length-1]);
//
// pets.forEach(function(pet, i, arr) {
//     console.log(pet);
// })
// //Example 2
// var i = 0;
//
// while (i<pets.length) {
//
//     console.log(pets[i]);
//
//     i++;
//
// }
function palindrome(input) {
    return true;
}
console.log(palindrome("dog"));


//Look into Array prototypes
//Things to cover with array .length, .shift, .unshift, .indexOf .push .lastIndexOf .join .split .capitalize .reverse .split .sort .pop
//push,pop, (modify array at the end) Shift and unshift(beginning) indexOf and lastIndexOf look for the items in an array.
//using the .length
//On this Page
// Syntax
// Description
// Examples
// Specifications
// Browser compatibility
//Array is an object is ( a list of things)
//The function below gives an array in reverse using the .reverse
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();


//Get last item in an array
function getLastItem(arr) {
    return arr.pop();
}

//Using tbe .

var car ={
    make: "Ford",
    model: "Mustang",
    year: 2008,
    isTitled: true,
    options:[
        "Turbo",
        "Heated Seats",
    "leather interior",
    "A/C"],

    goGoGo: function(key) {
        if(key == "key"){
            console.log("vroom");}
        else
        }console.log("...");


    }
}

console.log("Car was made in" + car.year);
console.log("car has these options:");
car.options.forEach(function(option){
    car options.forEach(function(option){

}

var teacher = {
        name:"Daniel",
    languages:["1","2","3"],
    teach:function ("blah blah blah"); {

    }
}
var fruits = ["apple", "pear", "banana", "grape","mango","pineapple"]
var fruits1thru3 = fruits.slice(0,3);
console.log(fruits1thru3);
console.log(fruits);


var sentence = "the quick brown fox jumps over the lazy dog";
console.log(sentence);
var words = sentence.split("");
console.log(words.slice(2,4));


//you need to complete exercise below
//capitalize each letter capitilize for letter is firstLetter.toUpperCase
var sentence = "The quick brown fox jumps over the lazy dog";
var words = sentence.split("");
words.forEach(function(word){
    var firstLetter = word.split().unshift();
})


// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel


// The unshift() method adds one or more elements to
// the beginning of an array and returns the new length of the array.
//using the .unshift
var arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]

//

//The indexOf() method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
//indexOf() compares searchElement to elements of the Array
// using strict equality (the same method used by the === or triple-equals operator)
//syntax: arr.indexOf(searchElement[, fromIndex])
//Using the indexOf
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

//using the .length
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]














//The following is from the study group for js assessment 2
"use strict";

//define a function names addFive that takes an input and adds 5, if the input is NOT numeric the function should return false.
function addFive(x) {
    x = parseInt(x); //parsing to a number
    x += 5;
    if(isNaN(x)){
        return false;
    } else {
        return x;
    }
}


 console.log(addFive("2")); // 7
 console.log(addFive(5)); // 10
 console.log(addFive(true)); // false
 console.log(addFive("cat")); // false


//define a function names toTheThird that takes an input and returns that input to the third power (cubed); if the input is not numeric the function should return false
function toTheThird(x) {
    x = parseInt(x);
    if (isNaN(x)){
        return false;
    } else {
        return x * x * x;
    }
}

 console.log(toTheThird("2")); // 8
 console.log(toTheThird(5)); // 125
 console.log(toTheThird(true)); // false
 console.log(toTheThird("cat")); // false


// Define a function named lowerCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
function lowerCase(x){
    if (!isNaN(parseInt(x))){
        return false;
    } else if (typeof (x) === "string") {
        return x.toLowerCase();
    } else {
        return false
    }
}

 console.log(lowerCase("2")); // false
 console.log(lowerCase(5)); // false
 console.log(lowerCase(true)); // false
 console.log(lowerCase("CAT")); // CAT


// Write a function named sumOfCubes that takes in two inputs. If both inputs are numeric, sumOfSquares should cube each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
function sumOFCubes(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (isNaN(x) || isNaN(y)){
        return false;
    } else return ((x * x * x) + (y * y * y))
}
// or return (toTheThird(x) + toTheThird(y)
// console.log(sumOFCubes("2", "5")); //8 + 125 = 133
// console.log(sumOFCubes(5, 4)); //125 + 64 = 189
//console.log(sumOFCubes(true, true)); //false
console.log(sumOFCubes("cat", "dog")); //false


// Write a function named divide that takes in two inputs. If both inputs provided are numeric, divide returns the result of the first input multiplied by the second. If either or both inputs are not numeric, divide should return false.
function divide(x, y){
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)){
        return false;
    } else {
        return x / y;
    }
}


 console.log(divide("12", "4")); // 12 / 4 = 3
// console.log(divide(20, 6)); // 20 / 6 = 3.33333~
// console.log(divide(true, true)); // false
// console.log(divide("cat", "dog")); //false

//hey, aren't there special rules when it comes to dividing with or by 0???

// console.log(divide(0, 12));
// console.log(divide(12, 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Write a function named reverseUpperCaseString that takes in a single input. If the input is a numeric string, then return false. If the input is a string, return that string capitalized and reversed
function reverseUpperCaseString(x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof (x) !== "string") {
        return false;
    } else {
        x = (x.split("").reverse().join("")).toUpperCase();
        return x;
    }
}

// when using split "" no space in between quotes is byt character with space is by split by string.

 console.log(reverseUpperCaseString(true)); // false
// console.log(reverseUpperCaseString(18)); // false
// console.log(reverseUpperCaseString("15")); // false
// console.log(reverseUpperCaseString("cat")); // TAC
 console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
 console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY



// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
function getLowestNumber(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if (!isNaN(x) && (!isNaN(y) && (!isNaN(z)))){
        return Math.min(x, y, z);
    }else return false
}






 console.log(getLowestNumber(1, 15, 30)); // 1
 console.log(getLowestNumber(true, false, true)); // false
 console.log(getLowestNumber("1", "15", "30")); // 1
 console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
 console.log(getLowestNumber(1, "otter", 30)); // false
 console.log(getLowestNumber(-53, 72, 7)); // -53

//Split, reverse and join string to get reversed text
//Example 1
function palindrome(text) {

    var reversedText  = text.toLowerCase()
        .split('').reverse().join('');


    return text === reversedText;

}
console.log(palindrome("eye"));
//Example
//function palindrome(text) {
// // Split, reverse and join string to get reversed text
//     var reversedText  = text.toLowerCase()
//         .split('').reverse().join('');
//
//
//     return text === reversedText;
//
// }
// console.log(palindrome("dog"));
//Example 2
//     function reverseUpperCaseString(input) {
//         if(!isNaN(parseFloat(input))) {
//             return false;
//         }else if (typeof input !== "string") {
//             return false;
//         }else{
//             var input2 = (input.split("").reverse().join("")).toUpperCase();
//             return  input2 === input.toUpperCase();
//         }
//     }
//