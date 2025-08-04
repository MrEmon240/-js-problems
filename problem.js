// problem one 

var area = 800;

var property = area / 2;
console.log(property);




// problem two 
var money = 45000;
if (money >= 45000) {
    console.log("Laptop");
}
else if (money >= 10000) {
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}


// problem three 

var lastDay = 4;
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 == 0) {
    console.log(day + "-medicine");
  } else {
    console.log(day + "-rest");
  }
}



// problem five 

var student = { name: "jhankar", roll: 1014, department: "cse" };


var names =student.name;
var rolls=student.roll;
var departments =student.department;

var email = names + rolls + "." +departments +  "@ph.ac.bd";
console.log(email);