// 6a Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
// - If hour is between 6 and 12, display "gm" in the console
// - If hour is between 13 and 17, display 'Good Afternoon!' in the console
// - Otherwise, display 'Good night!' in the console

let hour = Math.floor(Math.random()* 24);

console.log(`Random hour: ${hour}`)

if (hour >= 6 && hour <= 12) {
  console.log(`gm`);
}
else if (hour >= 13 && hour <= 17) {
  console.log(`Good Afternoon!`);
}
else {
  console.log(`Good Night!`);
}





// const randomNum = Math.random()*100;
// console.log(randomNum.toFixed(0));
