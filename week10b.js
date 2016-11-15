var age = prompt ("enter age");
console.log(age);

var theDate = new Date();
  var year = theDate.getFullYear();
  console.log(year);

var total = year - age;
document.getElementById("year").innerHTML=total;
