function myFunc(x) {
  console.log(x);
}

/* myFunc("I am a text from a function");
myFunc("Ha ha ha"); */

function amarFunc(n1 = 4, n2 = 4) {
  console.log(n1 + n2);
}

/* amarFunc(5, 6);
amarFunc(11, 13);
amarFunc();
 */
//array
var studentName = ["Dip Sarkar", "Samama", "Pinky", "Mirza"];
// console.log(studentName[1] + " " + studentName[2]);

var sp = 0;
var ep = 9;
/* while (sp <= ep) {
  console.log(sp);
  ++sp;
} */

var arr = ["Aam", "Jaam", "Kathal", "Lichu"];

var shuru = 0;
/* while (shuru < 4) {
  console.log(arr[shuru]);
  shuru++;
} */

for (var i = 2; i <= 100; i += 2) {
  console.log(i);
}
