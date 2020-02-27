let myNumbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
let sum = 0;
var totalSum = 0;
let userChoice = prompt(`Choose which option you want to do: \n1. sum up \n2. average the numbers`)


switch (userChoice){
case (userChoice = "1"):
for (var i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i]
}
alert(`The sum of the ${myNumbers.length} numbers is ${sum}`);
break;
 
 
case (userChoice = "2"):
for(var i in myNumbers) {
    totalSum += myNumbers[i];
}
var myNumbersCnt = myNumbers.length;
var average = totalSum / myNumbersCnt;
alert(`The average of the ${myNumbers.length} numbers is ${average}`);
break;
 
default:
  alert("Have a good day");
}
 
 let userChoice2 = parseInt(prompt(`Pick a number`))
myNumbers.push(userChoice2)
 let userChoice3 = parseInt(prompt(`Pick a second number`))
myNumbers.push(userChoice3)
 let userChoice4 = parseInt(prompt(`Pick a third number`))
myNumbers.push(userChoice4)

let additionNumbers = userChoice4 +10
 
alert(`The last number in the array is ${userChoice4}.\n${userChoice4} + 10 is ${additionNumbers}.`)
 
 
 
 /* part 7*/
 let newChoice = prompt(`Choose 3 more numbers please, separate them by commas`)
let newNumbers = myNumbers.push(newChoice)
alert(`The  numbers you chose were added to the array, which is now \n${myNumbers}`)