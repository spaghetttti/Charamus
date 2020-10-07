console.log("Hello World");
var x = 6;
console.log(x);
document.write("this is the value of x : " + x);
document.getElementById("demo").innerHTML = "Hello";
$("#demo1").text(6*x);
$(".fade").fadeOut("slow");
document.getElementsByClassName("greg")[1].innerHTML = "this shit is permament";
//document.getElementsByClassName("greg")[1].style.color = "green";
$(".greg").css("color" , "red" );
$(".greg").css("background-color" , "blue");
var x = ["one","two",",","three"];
for (var i=0; i<4;i++)
{
  console.log(x[i]);
}

var person =
{
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  line : "Hello, dear frineds, how are you doing this evening ?",
  fullName : function()
  {
     return person.firstName + " " + person.lastName;
  }
};

document.write("<br>" + person.fullName() +"\n ");
var x = person.line.indexOf("dear");
var y = person.line.search("dear");
document.write(x+"<br>");
y = "1goat";

console.log(person.line);
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try
  {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
    console.log("Input is " + err);
  }
}
