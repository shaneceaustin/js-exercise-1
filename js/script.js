// This declares the variable myName and assigns 
//it the string value of my name
var myName = 'Shani Austin';
// This declares myAGe var and sets it to a number
var myAge = 28;
// This declares the var myHobbies and assigns it to an 
//array of strings
var myHobbies = ['designing','writing','styling'];
//This declares the var myDog as an object and assigns it
//various properties
var myDog= {
	name: 'Momo',
	age: 2,
	likes: ['playing ball','walks','eating']
};
//object properties are accessed via dot notation
console.log(myName);
console.log(myAge);
console.log(myHobbies);
console.log(myDog.name);
console.log(myDog.age);
//Items within an array can be accesses via [], arrays
//start counting from 0
console.log(myDog.likes[1]);