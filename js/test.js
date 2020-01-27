// function sayHello() {
//     let x ="HELLO"
//     return x;
// }
// console.log(sayHello());

const obj = {
    someNumber: 42,
    whichSideOFTheForce: 'The Dark Side',
    arnie: 'Get to tha choppa!',
};

// const multiply = (num1, num2) => {
//     let sum = 0;
//     for(let i = 0; i<num2; i++){
//         sum += num1;
//     }
//     console.log('inside multiply');
//     return sum;
// }


// const puppy = "Banjo";
// module.exports = {obj, multiply, puppy};

// export const multiply = (num1, num2) => {
// let sum = 0;
// for (let i =0; i<num2;i++){
// sum += sum
// }
// console.log("inside multiply");
// return sum;
// };
function foo(str) { console.log(`foo prints ${str}`); }

let firstName = 'George';

export { foo, firstName };
//
// function sayHello(name) {
//     if (typeof name === 'undefined') {
//         name = 'World';
//     }
//     return 'Hello, ' + name + '!';
// }
//
// sayHello(); // "Hello, World!"
// sayHello('codeup');

let movies = [
    {name: 'Bee Movie', rating: 10},
    {name: 'Star Wars Trek', rating: 1},
    {name: 'Virgin Suicides', rating: 7},
    {name: 'King of the Road', rating: 8}];

const rating = movies.map(movie => ({
    title: movie.name,
    rating: movie.rating,
}));
console.log(rating);

