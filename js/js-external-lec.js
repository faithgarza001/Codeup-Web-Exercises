console.log("hello from out external js file!");

//Exercise 3
// var userColor = prompt("what is your favorite color?")
//var alertMessage = "Great," + userColor + "is my favorite color too!";
// alert(alertMessage);
//Here is another way to do the exercise this is a dynamic version
// var dailyRentalRate = Number(prompt(message:"How much is the daily rental rate?"));

     var rentalfee = parseInt(prompt("What is the rental fee?"));

     var theLittleMermaid = parseInt(prompt("How many days would you like to rent the Little Mermaid for?"));

     var brotherBear = parseInt(prompt("How many days would you like to rent the brotherBear for?"));

     var hercules = parseInt(prompt("How many days would you like to rent the hercules for?"));

     var rentalPurchase = (theLittleMermaid + brotherBear + hercules) * rentalfee;
        alert("Your total price of rental purchase is" + rentalPurchase);


//var googleRate = Number(prompt("what is your google rate?"));
//var amazonRate =  Number(prompt("what is your amazon rate?"));
//var facebookRate =  Number(prompt("what is your facebook rate?"));
//var googleHours = Number(prompt("How many hours did you work for google"));
//var amazonHours =  Number(prompt("How many hours did you work for amazon"));
//var facebookHours=  Number(prompt("How many hours did you work for facebook?"))
//var totalPay (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
//var alertMessage = "Your total pay is: $" + totalPay;
//alert(alertMessage);

    var hourlyrate = parseInt(prompt("what is the total hours worked?"));

    var googRate = parseInt(prompt("How many hours did you work for google"));

    var amaRate = parseInt(prompt("How many hours did you work for amazon?"));

    var fbRate = parseInt(prompt("How many hours did you work for facebook"));

    var total = (googRate + amaRate + fbRate) * hourlyrate;

    alert("The total rate for number of hours worked" + total);



//var classIsNotFull = confirm("Class is not full");
//var noScheduleConflicts = confirm("Schedules do not conflict");
//console.log("class is not full" + classIsNotFull);
//console.log("Schedule do not conflict" + noScheduleConflicts);
//var studentEnrolles = classIsNotFull && noScheduleConflicts;

    var classNotFull = confirm("Is the class full?");

    if (classNotFull === true) {

    alert("Class is full")} else {

        var classSize = prompt("What is your current class size?");

        var currClassSize = prompt("what's the max class size?");

        if ((parseInt(currClassSize) < parseInt(classSize)) && classNotFull === false) {

            alert("You are eligible to enroll");
        } else {

            alert("Sorry class is full")
        }
    }
//var numberOfItems = Number(prompt("How many items for checkout?")); number
// var offerValid = confirm("Is the offer valid?") boolean
//var isPremiumMember = confirm("Are you a premium member?"); boolean
// var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2)
//alert("Can use discount" + discountApplied)
/*{
var hasKrogerCard = parseInt(prompt("Do you have a KrogerCard?")); {
 */
  /*  var offerValid = /.confirm("Is the offer valid?");
    if(offerValid === true)
        alert ("")
    (prompt("Would you like to sign up for a Kroger card at this time?"))};

    /*var cartSize = parseInt(prompt("What is your cart size?"));

    var offerValid = parseInt(prompt("Is your offerValid"));

    var canHasDiscount = offerValid && (cartSize > 2 || hasKrogerCard);}

    alert("The total of your purchase is")

/*var atLeastFivePass = password.length >= 5;
console.log(atLeastFivePass);

var noWhiteSPace = username.trim() === username && password.trim() === password;*/