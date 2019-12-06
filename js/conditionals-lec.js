"use strict";

console.log("hello from conditionals js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
//if(admin){






//TODO Together: Send a 20% off coupon if its users birthday






//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true






//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
//if(itemCost <= currentBalance);





//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
/*var numberOFLive = 10;
if(numberOFLive === 0) {
    alert("Sorry game Over!");
}






//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "Snowing"
if(weather === "snowing") {
    alert ("it's snowing");
}





//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 20
if (numberInput > 10){
    alert("Number greater than 20");
}











//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

/*var isAdmin = true;
if(isAdmin) {

    alert("User is an Admin")
} else {
    alert("user is a regular user");
}



//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"
var isRainy = false;
if(isRainy){
    alert("is raining")
} else {
    alert("have a nice day")
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLive = 5;
if (numberOFLive === 0) {
    alert("Sorry, game over!")

} else {
    alert("Next Level!");
}




//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//var weather = sunny
//if (weather === snowing)
//{
//    alert("It's snowing")
//} else  {
//    alert("Check back later for more details!")
//}





//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

/*var numberInput = 5;
if(numberInput > 10){
    alert("greater than 10")
} else {
    alert("Number is less than 10")
}





//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIFGameIsOver(numberOfLive){
    if(numberOFLive === 0){
        return "sorry game over"
    } else{
        return "next level"
    }
}


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
/*var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
console.log("The value of of the confirm is:" + weShouldDeleteStuff);
if (weShouldDeleteStuff) {
    alert("delete everything")
    // delete all the things...
} else {
    alert("Operation Canceled!");
}

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
//var weather  = "snowing";
//if(weather === "snowing"){
  //  alert("It's Snowing")
//} else if(weather === "raining"){
  //  alert("it's raining")
//}else if (weather === "sunny"){
  /*  alert("it's sunny")
} else {
    alert("have a nice day")
}



//TODO Together: refactor the above statement as a function
function checkWeather(weather) {
    if (weather === "snowing") {
        alert("It's Snowing")
    } else if (weather === "raining") {
        alert("it's raining")
    } else if (weather === "sunny") {
        alert("it's sunny")
    } else {
        alert("have a nice day")
    }
}


// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
var pizzaPreference = prompt("what kind of pizza do you like?")



//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
//function Color(trafficLight){
   // if(trafficLight === "green"){
     //   return "Go! Go!";
    //} else if (trafficLight === "yellow") {
      //  return "SLOW DOWN";
    //}
//}

//(Color(trafficLight:"green"));



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
var userAge = 15;
var hasPermit = true
if(userAge < 15){
    alert("Sorry you're not eligible");
} else {
    if(userAge === 15){
        alert("you can have a permit");
    } else if (userAge  >= 16 && hasPermit){
        alert("Congrats you are eligible for a license")
    } else if (userAge >= 16 && !hasPermit){
        alert("sorry you need a permit first")
    } else {
        alert("Please see front desk.")
    }
}








// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
   var weather = "sunny";
 var weatherMessage = (weather === rainy)? "It's raining." : "Have a nice day.";
 console.log(weatherMessage);
 */

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
 /*var weather  =  "rainy";
 switch (weather) {
     case "rainy":
         alert("It's raining");
         break;

     case "sunny":
         alert("it's sunny.");
         break;
     case "snow":
         alert("it's snowing");
         break;
     default:
         alert("have a nice day.");
         break;
 }
//Rewrittten using a function remember when using a function you must return
//function checkWeather(weather{
//var weatherMessage;
// //switch(weather}{
//case "rainy":
//weatherMessage ="it's raining";
//case "sunny":
//weatherMessage = "it's sunny"; }
//return weatherMessage;
//}
//console.log(checkweather("sunny));








//TODO: Rewrite the intersection function from earlier as a switch statement.
 /* function checkTrafficLight(trafficLight){
     var trafficMessage;

     switch (trafficLight) {
         case "green."
             trafficMessage = "Go, go go!";
         break
         case "yellow."
             trafficMessage = "Slow down.";
         break
         case "red"
             trafficMessage = "Stop!";
         break
         default:
             alert("No cop don't stop!")}
             return trafficMessage ;}

  console.log(checkTrafficLight(("green"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output












// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:/modulo 0 */



 /*var ask = confirm("Would you like to enter a number?")

if (ask === true) {
    var number = (prompt("Please enter your number here"));
  
    if (isNaN(number)) {
        alert("not a number");
    } else {
        if (number % 2 === 0) {
            alert(number + " is even")
        } else {
            alert(number + " is odd")
        }
        var plus100 = 100 + Number(number);
        (alert("Here is your new number " + plus100));

        if (number < 0) {
            alert("Your number is negative")
        } else {
            alert("your number is positive")

        }
    }
}



/*var num = prompt("Please enter your number here");
alert("Your  number is" + isEvenOrOdd(num))
var plus100 = num + 100;
var isPositiveOrNegative =

function isEvenOrOdd(number)
if(number % 0)
return "Even"
else
return "Odd"








/** - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzecolor(color) {
    var colorMessage;
    switch (color) {
        case "blue":
            colorMessage = "blue is the color of the sky";
            break;
        case "red":
            colorMessage = "Strawberries are red";
            break;
        case "cyan":
            colorMessage = "I don't know anything about cyan";
            break;
           

    }
    return colorMessage;
}
        console.log(analyzecolor("blue"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
  /*  function f(colors) {
   /               return f(+ colors)
/}
/console.log(f())
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);