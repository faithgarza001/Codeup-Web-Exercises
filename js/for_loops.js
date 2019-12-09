//Multiplication Table 7's

function showMultiplicationTable(numberInput) {
    for (var i = 1; i <= 10; i++) {
        var answer = numberInput * i;
        console.log(numberInput + "x" + i + " = " + answer)
    }
}

showMultiplicationTable(7);

//Use a for loop to generate ten random numbers
//Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// Example: function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
//  for (var i = 0; i <= 10; i++) {
//
//      var randomNumber = Math.floor(x
//  :
//      Math.random() * 180);
//  )
//      +20;
//
//      if (randomNumber % 2 === 0) {
//
//          console.log(randomNumber + "is even");
//
//          else
//              {
//                  console.log(randomNumber + "is odd")
//              }
//          }
//      }
//  }

 //Create a for loop that uses console.log to create the output shown below.
for (var i = 1; i < 10; i++){
  console.log (i.toString().repeat(i));
}

//Create a for loop that uses console.log
// to create the output shown below(number being subtracted by 5's starting at 100)

for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}
















//    var tableLimit = 70;
//    var tableLine = "";
//
//    for (i = 1; i <= tableLimit; i++){
//    console.log(""+ i)}
// }

