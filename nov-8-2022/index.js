var student = ["Abul", "Babul", 35, true];
/* 
console.log(student[3]);
console.log(student.length);
console.log(student.push("Kuddus", "Boyati"));
console.log(student.pop());
console.log(student.shift());
console.log(student.unshift("Yusuf", "Boyati"));
console.log(student.slice(0, 3));
console.log(student.splice(2, 4));
console.log(student); 
*/

/* 
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);
*/

/* 
for (var i = 0; i < student.length; i++) {
  console.log(student[i]);
} 
*/

var message = [" lives in ", " and his age is  ", "."];

var students = [
  ["Aslam", "Pakistan", 85],
  ["Shing Khan", "Delli", 45],
  ["Abul Mia", "Dhaka", 20],
  ["Salman Shah", "Kobor", 36],
];

// console.log(students[1][0]);

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j] + " " + message[j]);
  }
}
