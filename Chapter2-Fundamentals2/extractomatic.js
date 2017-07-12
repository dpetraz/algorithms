// GIVEN A NUMBER (num) AND A DIGIT NUMBER (digitNum), RETURN THE VALUE OF THE NUMBER RESIDING IN THE REQUESTED DIGIT NUMBER LOCATION
// I.E.,  num = 9483 and digitNum = 2 will return 4

function extractDigit(num, digitNum){
  var number = 0;

  // CONVERT num TO A POSITIVE VALUE IF NECESSARY
  if (num < 0){
    number = Math.abs(num);
    num = number;
  }

  // RETURN number BASED ON DIGIT NUMBER AND NUMBER PROVIDED
  if (digitNum == 0){
    number = Math.floor(num % 10);
  }
  else if (digitNum > 0){
    number = num % (Math.pow(10,digitNum+1));              //OBTAIN TARGET 'number' (and all numbers to the right of it)
    number = Math.floor(number/(Math.pow(10,digitNum)));   //SHIFT TARGET 'number' AND ROUND DOWN TO REMOVE DECIMAL FRACTION
  }
  else if (digitNum < 0){
    number = (num * Math.pow(10,(-1*(digitNum))))           //SHIFT TARGET 'number' TO ONES PLACE
    number = Math.floor(number % 10);                       //OBTAIN ONES PLACE AND ROUND DOWN TO REMOVE DECIMAL FRACTION
  }
  console.log("result is " + number);
  return number;
}

extractDigit(189.2473,-2)
