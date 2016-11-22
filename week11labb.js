function aLab(){
  var adjective = new Array();
  adjective = ["happy","sad","mad","angery","happier"]
  var num1 = Math.floor(Math.random()*5);

  var aNoun = new Array();
  aNoun = ["fish","dog","cat","rat","monkey"];
  var num2 = Math.floor(Math.random()*5);

  document.getElementById("output").innerHTML= ("What a " + adjective[num1]+ " "+ aNoun[num2]);


Math.random()*10;

}
