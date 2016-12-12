function Queen(){

	var num1= document.getElementById("num1").value;
  var cost = 99
  var tax = 0.15
  var nightCost = num1*cost;
  var taxCost = nightCost * tax;
	var total = nightCost + taxCost;

	document.getElementById("output"). innerHTML="Cost of Queen Suite for: "+ num1 + " night(s) = $" + total;

}
function QueenView(){

	var num1= document.getElementById("num1").value;
  var cost = 99
  var tax = 0.15
  var nightCost = num1*cost;
  var taxCost = nightCost * tax;
	var total = nightCost + taxCost;

	document.getElementById("output").innerHTML="Cost of Queen Suite with View for: "+ num1 + " night(s) = $ " + total;

}

function Bunk(){

	var num1= document.getElementById("num1").value;
  var cost = 110
  var tax = 0.15
  var nightCost = num1*cost;
  var taxCost = nightCost * tax;
	var total = nightCost + taxCost;

	document.getElementById("output").innerHTML="Cost of Queen Suite with Double Bunk Beds for: "+ num1 + " night(s) = $" + total;

}
function KingSuite(){

	var num1= document.getElementById("num1").value;
  var cost = 130
  var tax = 0.15
  var nightCost = num1*cost;
  var taxCost = nightCost * tax;
	var total = nightCost + taxCost;

	document.getElementById("output").innerHTML="Cost of King Suite: "+ num1 + " night(s) = $" + total;
}
