var myNumber = 42;
var myName = "FirstName LastName";

var tmp = myNumber;
myNumber = myName;
myName = tmp;

console.log("myNumber = " + myNumber + " and myName = " + myName);
