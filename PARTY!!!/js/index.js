var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function anti() {
  alert("Wow!");
  story.innerHTML = "Parties? No?"
  opt1.innerHTML = "Can I go now?";
  opt1.onclick = function() {wimp()}
  opt2.innerHTML = "";
}

function wimp() {
  story.innerHTML = "If you really want to go home you can. But you'll miss all the fun."
  opt1.innerHTML = "Bu-Bye";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "Fine";
  opt2.onclick = function() {OHWG()};
}

function OHWG() {
  opt1.innerHTML = "Ready!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function play() {
  name = prompt("Party's 'till well... whenever. Name:");
  story.innerHTML = "Welcome! " + name + ", have fun. There are games inside to die for. Literally. You have entered the 1st Task. First games: 'Scavenger Bone Hunt' or 'Daze Maze'";
  opt1.innerHTML = "Scavenger Bone Hunt";
  opt1.onclick = function() {SBH()};
  opt2.innerHTML = "Daze Maze";
  opt2.onclick = function() {DM()};
}

function SBH() {
   story.innerHTML = "You find all the bones required on the 'Bone List'. You have accomplished the first task, " +name+ ". Well done! The first task is finished. Do you want to move on to the next task?";
  opt1.innerHTML = "I'm going home.";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "I'm going to finish this thing.";
  opt2.onclick = function() {Task2()};
}
  
function DM() {
   story.innerHTML = "Your favorite lullaby starts playing and you fall into a deep sleep. Valtures start to circle over head and ...you know... where taken for... roadkill.";
  opt1.innerHTML = "I'm going home. *The exit is that way -->*";
  opt1.onclick = "";
  opt2.innerHTML = "EXIT";
  opt2.onclick = function() {restart()};
}
  
function Task2() {
  story.innerHTML = "The next two games are: 'Mystery Fountain' or 'Light Life, Dark Death, Bingo!'";
  opt1.innerHTML = "Light Life, Dark Death, Bingo!";
  opt1.onclick = function() {LDBingo()};
  opt2.innerHTML = "Mystery Fountain";
  opt2.onclick = function() {MF()};
}

function LDBingo() {
  story.innerHTML = "You were the first one to yell; BINGO! You have finised the 2nd task. Do you want to move onto the next to the next task?";
  opt1.innerHTML = "I'm sick of this.";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "My Motto is: Keep on pushing until you get there.";
  opt2.onclick = function() {Task3()};
}

function MF() {
  story.innerHTML = "You reach into the dark murky water and pull out a B-Bingo card. It says 'You are reading a B-Bingo Card (B-Bingo Card = Bad-Bingo Card) A mistery human will come up behind you and slotter you like a lamb. Have fun with your death. HAA HAA HAA HAA HAA HAA!!!!!!!!!!!!!!!!!!'";
  opt1.innerHTML = "Seriously? This is getting bad!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function Task3() {
   story.innerHTML = "You have moved onto the 3rd Task 2 more tasks to go. The next two games are Lost Match or Concert.";
  opt1.innerHTML = "Lost Match";
  opt1.onclick = function() {LM()};
  opt2.innerHTML = "Concert";
  opt2.onclick = function() {Concert()};
}
  
  function LM() {
   story.innerHTML = "You walk into the room and find your highschool sweetheart that you broke up with right after the dance. The test is to see who kills who first. Unfortunately you were killed first.";
  opt1.innerHTML = "Oh come on!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
  }
    
function Concert() {
   story.innerHTML = "You enter a room with a stage and a curtin saying 'The Concert'. The rules are you make up a 3 minute song, no more and no less, and you have to trash talk the person next to you without using curse words. You are the only one who sang for exactly 3 minutes and perfect trash talk. You completed the 3rd task. Do you want to start the 4th?";
  opt1.innerHTML = "I'm out of here";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "I'm in it to win it.";
  opt2.onclick = function() {Task4()};    
} 
  
function Task4() {
   story.innerHTML = "You have complted the third task. The next 2 options are City or Counry.";
  opt1.innerHTML = "City"
  opt1.onclick = function() {City()};
  opt2.innerHTML = "Country";
  opt2.onclick = function() {Country()};    
} 

function City() {
   story.innerHTML = "You enter the city. The rules are you have to stay in the city and live on the streets for 2 days. Unfortunately, you caught the plague and your life didn't end so well.";
  opt1.innerHTML ="This is weird!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";    
} 

function Country() {
   story.innerHTML = "You entry the country side and are alone. The rules are you have to survive in the country in a recently abandoned farm for two days. So, there are still cows to milk, plants to water, and lawns to mow. You stay there for the two days and keep the farm healthy. Now, the farm is in good hands. You completed the 4th task do you want to do the 5th and final task?";
  opt1.innerHTML = "What about the cowboys and cowgirls? I'm out... so not cool.";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "I will not give up!";
  opt2.onclick = function() {Task5()};    
} 

function Task5() {
   story.innerHTML = "Congratulations! You've made it to the 5th and final round. The next tasks are: 'Colors' or 'Animals'.";
  opt1.innerHTML = "Colors";
  opt1.onclick = function() {Colors()};
  opt2.innerHTML = "Animals";
  opt2.onclick = function() {Animals()};    
} 

function Colors() {
  colors = prompt("What is your favorite color?");
  story.innerHTML = colors + "! Really! That is a terrible color! Because I hate that color so much I'm kicking you out of the game.";
  opt1.innerHTML = "Really. REALLY!?";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function Animals() {
  animal = prompt("Whats your favorite animal?");
  story.innerHTML = animal + "! Thats my favorite animal!";
  opt1.innerHTML = "Next -------->";
  opt1.onclick = function() {next()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function next() {
  story.innerHTML = "Good job " + name + "! You did. And this was supposed to be some sort of... party!";
  opt1.innerHTML = "PAR-TAY!";
  opt1.onclick = function() {restart()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

    function restart() {
   story.innerHTML = "Anyone want to PARTY?";
  opt1.innerHTML = "Bring it on!!!";
  opt1.onclick = function() {play()};
  opt2.innerHTML = "I don't do... parties.";
  opt2.onclick = function() {anti()};
}