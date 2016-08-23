var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("That remains to be seen.");
  story.innerHTML = "Wimp!"
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {restart()}
  opt2.innerHTML = "";
}

function play() {
  name = prompt("What is your name, Agent?");
  story.innerHTML = "Welcome Agent " + name + ", you have been shipped over to Los Vewaigas. There is an army approaching. Do you want to run away? You're on your own.";
  opt1.innerHTML = "Run!!!!";
  opt1.onclick = function() {Run()};
  opt2.innerHTML = "Stay and hide";
  opt2.onclick = function() {Hide()};
}

function Run() {
   story.innerHTML = "You are one slow runner, Agent " +name+ "! Your life has ended here. Such a short life!";
  opt1.innerHTML = "I'll go faster";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function Hide() {
   story.innerHTML = "You run into a building do you choose to go up or down?";
  opt1.innerHTML = "Up";
  opt1.onclick = function() {Up()};
  opt2.innerHTML = "Down";
  opt2.onclick = function() {Down()};
}

function Up() {
   story.innerHTML = "You go to the top, you close the door, and are ambushed by the army. That is the end of your life, Agent " +name ".";
  opt1.innerHTML = "Try Again";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = ""
}

function Down() {
   story.innerHTML = "You go down and find a rebel army with armour and weapons. Do you battle with them or stay back and watch the base?" ;
  opt1.innerHTML = "Go with them";
  opt1.onclick = function() {Go()};
  opt2.innerHTML = "Stay back";
  opt2.onclick = function() {Stay()};
}

function Go() {
   story.innerHTML = "You battle the army, and win. Good job Agent " +name+ ", you did it. I will send a private jet to come and get you." ;
  opt1.innerHTML = "Thank You!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}
  
function Stay() {
   story.innerHTML = "The army finds you, and your life ends here." ;
  opt1.innerHTML = "Try Again";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function restart() {
   story.innerHTML = "Ready to be Challenged?";
  opt1.innerHTML = "Definitely!";
  opt1.onclick = function() {play()};
  opt2.innerHTML = "Is it scary?";
  opt2.onclick = function() {boring()};
}