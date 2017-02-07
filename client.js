//
// var zombieOne = "Luke";
// var zombieTwo = "Paul";
// var zombieThree = "Fred";
//
// var zombieArray = ["Kris", zombieTwo, "Catherine", "Jeremy"];
//
// console.log(zombieArray[5]);
//
// zombieArray.push(zombieOne);
// zombieArray.push(zombieTwo);
// zombieArray.push(zombieThree);
// console.log(zombieArray[5]);
//
// zombieArray.unshift(zombieThree); //adds first Fred
// console.log(zombieArray);
//
// zombieArray.pop(zombieThree); //loses last Fred
// console.log(zombieArray);
//
// var whoGotPopped = zombieArray.pop(); //loses Paul
// console.log(whoGotPopped);
//
// console.log(zombieArray);
//
// whoGotPopped = zombieArray.pop(); //just name, not entire array
// console.log(whoGotPopped);
//
// console.log(zombieArray);
//
// vwhoGotPopped = zombieArray.pop();
// console.log(whoGotPopped);
//
// console.log(zombieArray);
//
// whoGotPopped = zombieArray.shift();
// console.log(whoGotPopped);
//
// console.log(zombieArray); //["Kris", "Paul", "Catherine"]
//
// console.log(zombieArray.length); //how many zombies still there
//
// zombieArray[2] = "Steve";
// zombieArray[3] = "Carla";
// zombieArray[7] = "Cody";
//
// console.log(zombieArray);
//
// zombieArray.length = 30;
//
//
//
// var someNumber = 0;
// for(var i = 0; i < zombieArray.length; i++){
//   if(zombieArray[i] == "Carla") {
//     console.log(i);  //loops through and finds/checks for Carla
//   }
//   // console.log(zombieArray[i]);
// }

// //
// // function whoIsAZombie(zombies) {
// //   // console.log("zombies: ", zombies);
// //   // console.log("zombies [0]: ", zombies[0]);
// //   return zombies[0] + zombies[1];
// // }


var ballOfString = "Catherine";

var firstLetter = ballOfString[0];
firstLetter = ballOfString.charAt(0);

console.log(firstLetter);

var stringLength = ballOfString.length;

var firstTwoLetters = ballOfString.substring(0,2); //(x,y) x is index of first letter you want, y is index of first letter you don't want
var middleTwoLetters = ballOfString.substring(4, 5);
var lastTwoLetters = ballOfString.substring(stringLength - 2,stringLength); //if you want the last item it's always stringLength

console.log(firstTwoLetters);
console.log(middleTwoLetters);
console.log(lastTwoLetters);

var commaSeparatedValues = "one, two, three, four";

var newArray = commaSeparatedValues.split(", ");
console.log(newArray);






























// aaaaahhhhhhh zombies run for your life!!!!!
