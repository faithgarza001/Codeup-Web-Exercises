(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Faith",
        lastName: "Garza",
        sayHello: function () {
            return "Hello " + this.firstName + "" + this.lastName + "!";

        }

    };
    console.log(person.firstName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
            person.sayHello = function () {
                return "Hello from " + this.firstName + " " + this.lastName + "!";
            }
        console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
     shoppers.forEach(function (shopper) {
         console.log(shopper.name)
         {
             var discount = 0;
             if (shopper.amount > 200)
                 discount = shopper.amount * .12;
             var total = shopper.amount - discount;
             console.log(shopper.name + " 's bill is $ " + shopper.amount + " . They received a discount of $" + discount + " and their total was $" + total)
         }
     })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
         var books = [
        {name:"Book 1"},
        {name:"Book 2"},
        {name:"Book 3"},
        {name: "Book 4"},
        {name:"Book5"},
        ];
    books.forEach(function (book) {
        console.log(book.name)
        {
            var author = [
                {writer: "author 1"},
                {writer: "author 2"},
                {writer: "author 3"},
                {writer: "author 4"},
                {writer: "author 5"}
            ];

            console.log(book.name + author.writer)
        }
    })//
    //Instructor Example
    var books = {
        title: "book1",
        author:{
            firstName: "doe",
            lastName:"John",
            report:function(){
                console.log(this.firstName + "" + this.lastName + "");
            }
        }
    }

            /**
             * TODO:
             * Loop through the books array and output the following information about
             * each book:
             * - the book number (use the index of the book in the array)
             * - the book title
             * - author's full name (first name + last name)
             *
             * Example Console Output:
             *
             *      Book # 1
             *      Title: The Salmon of Doubt
             *      Author: Douglas Adams
             *      ---
             *      Book # 2
             *      Title: Walkaway
             *      Author: Cory Doctorow
             *      ---
             *      Book # 3
             *      Title: A Brief History of Time
             *      Author: Stephen Hawking
             *      ---
             *      ...
             */

            books.forEach(function (book, i) {
                console.log("Book 1" + (i+1));
                console.log(book[i])
                console.log("Title: " +book.title)
                console.log("Author: " + book.author.firstName + "" + book.author.lastName )
                console.log("___")
            })



            /**
             * Bonus:
             * - Create a function named `createBook` that accepts a title and author
             *   name and returns a book object with the properties described
             *   previously. Refactor your code that creates the books array to instead
             *   use your function.
             * - Create a function named `showBookInfo` that accepts a book object and
             *   outputs the information described above. Refactor your loop to use your
             *   `showBookInfo` function.
             */

        })();
        var title = "Hello";
        var createBook = function(title, authorFirstName, authorLastName) {
            var book = {}
            book.title = title;
            book.author = {};
            book.author.firstName = authorFirstName;
            book.author.lastName = authorLastName;
            return book;
        }
        books.push(creatBook()


//Object oriented curriculum
// var teacher = {
//     name: "Daniel",
//     languages:["English", "JavaScript", "Java"],
//     teach: function (language) {
//         if(this.languages.includes(language))
//             console.log("Here is some knowledge about " + language);
//         else console.log("blah blah blah");
//
//     }
// }
// teacher.teach("Java");
//
// //Instance notation
// var truck = new Object()
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;



//Object oriented curriculum
// var teacher = {
//     name: "Daniel",
//     languages:["English", "JavaScript", "Java"],
//     teach: function (language) {
//         if(this.languages.includes(language))
//             console.log("Here is some knowledge about " + language);
//         else console.log("blah blah blah");
//
//     }
// }
// teacher.teach("Java");
//
// //Instance notation
// var truck = new Object()
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;


var books = {
    title: "This is a book",
    author:{
        firstName:"Helby",
        lastName:"Morrow"
    }
}

book.author.firstName;
book.author.lastName;

books.forEach(function(book){
    console.log("Book #" + books.indexOf(book));
}