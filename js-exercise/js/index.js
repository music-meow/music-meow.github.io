function Kittens() {
  var name = prompt("Hello little kitty what is your name?");
  alert("You are one cute kitty, " + name + ", and a very good one");
  // prompt("do you want some food?")
  var hungry = confirm("Do you want some food?");
  if (hungry) {
    var water = confirm("Would you like some water, too?")
    if (water) {
      alert("Great! I'll go run and grab you some.");
      var pet =confirm("Now,Let me pet you!");
      if(pet) {
        alert("Meow... Prrr...");
      } else {
        alert("Ow!");
      }
     
    } else {
      alert("Alright!")
    }

  }else {
      alert("Just tell me if you want some food later.")
    }
}