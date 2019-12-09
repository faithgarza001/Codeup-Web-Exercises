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
var pets = ["Toby", "Princess", "samson","Jill", "Bubbles", "Malu", "lily"]

for (var i = 0;i<pets.length;i++){
    console.log(pets[i]);
}

pets[pets.length] = "lily";

console.log(pets[pets.length-1]);

pets.forEach(function(pet, i, arr) {
    console.log(pet);
})
//Example 2
var i = 0;

while (i<pets.length) {

    console.log(pets[i]);

    i++;

}
