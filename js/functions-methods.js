var text = 'The sum is';
function addIt (numA, numB){
	var total = numA + numB;
	console.log(text + total);}
// addIt(8,8);
// addIt(10,10);
function multiply (){
	var total = 2 * 2;
	return total;
	console.log("this is never going to happen");
}
console.log(multiply(29, 4));

var myClass = "You all are great!";
var shani = {
	arms: 2,
	bigNose: true,
	hairColor: 'black',
	slogan: function(what){
		console.log(what + ' is awesome');
	} 

}
shani.slogan("You all");
shani.hairColor = 'grey';
console.log(shani.hairColor);
console.log(myClass);