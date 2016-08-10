var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("That remains to be unseen.");
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
   story.innerHTML = "You are a slow runner! Your life has ended here. Such a short life!";
  opt1.innerHTML = "Restart";
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
   story.innerHTML = "You go to the top,you close the door, and are ambushed by the army. That is the end of your life.";
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = ""
}

function Down() {
   story.innerHTML = "You go down and find a rebel army with armour and weapons. You battle the army and win. Good job agent " + ", you did it!" ;
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}
  

function restart() {
   story.innerHTML = "Ready to be Challenged?";
  opt1.innerHTML = "Defenentally!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "Is it scary?";
  opt2.onclick = function() {boring()};
}