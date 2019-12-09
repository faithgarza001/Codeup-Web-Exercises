// let i = 1;
// while (i < 65536){
//      {
//     console.log(i = i * 2)
//     }
// }

//This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
Math.floor(Math.random() * 5) + 1;
//1. Generate total cones = allCones
//2. Customer wants to buy x amount of cones-->cones purchase
//Check if there are cones left
//if not ---> sorry path
//if so happy path
//subtract amount sold from all cones
//repeat until no cones left Ex. allCones > 0
do{
      var conesPurchased = Math.floor(Math.random() * 5) + 1;
      //check if i have enough cones to sell
    if(conesPurchased > allCones){
        //sad path cannot sell any cones
        var sadConesMessage = "Cannot sell you" + conesPurchased + "I only have" + allCones +
            console.log(sadConesMessage);
    } else {
        allCones -= conesPurchased;
        var happyConesMessage = conesPurchased + "cones sold ..." + allCones + "cones to go";
        console.log(happyConesMessage);
    }
} while (allCones > 0);

// var i = 1;
// var totalCones = 100;
//
// for (var allCones = 100; < totalCones); {
//
// }
//
// if ((totalCones === allCones)){
//     alert("I have no more cones sorry");
//     console.log(5 * allCones)  }
//
// while (allCones < 100) {
//     alert (" i Still have cones for sale" + allCones);
//
// }

