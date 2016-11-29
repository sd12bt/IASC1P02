function backGround(){
	document.body.style.backgroundColor ="green";
}

var numArray =['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eightteen','nineteen',
									'twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five']
function add(){
	var number1 = ""
	var number2 = ""

	var num1= document.getElementById("num1").value;
	if (num1==="five") { var number1 = 5}
	 else if (num1==="four") {var number1 = 4}
	  else if (num1==="three") {var number1 = 3}
		 else if (num1==="two") {var number1 = 2}
		  else if (num1==="one") {var number1 = 1}
	var num2= document.getElementById("num2").value;
	if (num2==="five"){var number2 = 5}
	else if (num2==="four") {var number2 = 4}
	 else if (num2==="three") {var number2 = 3}
		else if (num2==="two") {var number2 = 2}
		 else if (num2==="one") {var number2 = 1}
	var total = +number1 + +number2;



	document.getElementById("output").innerHTML="Output: "+ num1 + " + " + num2 + " = " +  numArray[total];
	var rightNumber = Number(num1+num2);

}

function sub(){

	var number1 = ""
	var number2 = ""
	var num1= document.getElementById("num1").value;
	if (num1==="five") { var number1 = 5}
	 else if (num1==="four") {var number1 = 4}
	  else if (num1==="three") {var number1 = 3}
		 else if (num1==="two") {var number1 = 2}
		  else if (num1==="one") {var number1 = 1}
	var num2= document.getElementById("num2").value;
	if (num2==="five"){var number2 = 5}
	else if (num2==="four") {var number2 = 4}
	 else if (num2==="three") {var number2 = 3}
		else if (num2==="two") {var number2 = 2}
		 else if (num2==="one") {var number2 = 1}
	var total = +number1 - +number2;

	document.getElementById("output").innerHTML="Output: "+ num1 + " - " + num2 + " = " +  numArray[total];
	var rightNumber = Number(num1-num2);
}

function multiply(){

	var number1 = ""
	var number2 = ""
	var num1= document.getElementById("num1").value;
	if (num1==="five") { var number1 = 5}
	 else if (num1==="four") {var number1 = 4}
	  else if (num1==="three") {var number1 = 3}
		 else if (num1==="two") {var number1 = 2}
		  else if (num1==="one") {var number1 = 1}
	var num2= document.getElementById("num2").value;
	if (num2==="five"){var number2 = 5}
	else if (num2==="four") {var number2 = 4}
	 else if (num2==="three") {var number2 = 3}
		else if (num2==="two") {var number2 = 2}
		 else if (num2==="one") {var number2 = 1}
	var total = +number1 * +number2;

	document.getElementById("output").innerHTML="Output: "+ num1 + " * " + num2 + " = " +  numArray[total];
	var rightNumber = Number(num1*num2);
}

function divide(){

	var number1 = ""
	var number2 = ""
	var num1= document.getElementById("num1").value;
	if (num1==="five") { var number1 = 5}
	 else if (num1==="four") {var number1 = 4}
	  else if (num1==="three") {var number1 = 3}
		 else if (num1==="two") {var number1 = 2}
		  else if (num1==="one") {var number1 = 1}
	var num2= document.getElementById("num2").value;
	if (num2==="five"){var number2 = 5}
	else if (num2==="four") {var number2 = 4}
	 else if (num2==="three") {var number2 = 3}
		else if (num2==="two") {var number2 = 2}
		 else if (num2==="one") {var number2 = 1}
	var total = Math.floor(+number1 / +number2);

	document.getElementById("output").innerHTML="Output: "+ num1 + " / " + num2 + " = " +  numArray[total];
	var rightNumber = Number(num1/num2);
}
function percent(){

	var number1 = ""
	var number2 = ""
	var num1= document.getElementById("num1").value;
	if (num1==="five") { var number1 = 5}
	 else if (num1==="four") {var number1 = 4}
	  else if (num1==="three") {var number1 = 3}
		 else if (num1==="two") {var number1 = 2}
		  else if (num1==="one") {var number1 = 1}
	var num2= document.getElementById("num2").value;
	if (num2==="five"){var number2 = 5}
	else if (num2==="four") {var number2 = 4}
	 else if (num2==="three") {var number2 = 3}
		else if (num2==="two") {var number2 = 2}
		 else if (num2==="one") {var number2 = 1}
	var total = Math.floor((+number1 / +number2) * 100);

	document.getElementById("output").innerHTML="Output: "+ num1 + " / " + num2 + " = " +  total + "%";
	var rightNumber = Number(num1/num2) *100;
}
