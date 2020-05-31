

//Create a variable for the total amount of buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Create a loop to ensure that all buttons are "clickable" using the var above.
for (var i= 0; i<numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  }

//The addEventListner function is a higher order function- this means that it takes 2 inputs: (an action, a call-back function)



//Here the call back function creates a variable using "this"(which is the element that is being clicked)
//and InnerHTML which gives back the value of what click. I.E: if 1st button is clicked it will give back the .w class.
function handleClick() {

  var buttonInnerHTML = this.innerHTML;

  //Here the call back function is nested with two other functions:

  //The first function is to make sound once a button is clicked.
  makeSound(buttonInnerHTML);
//The second function takes the variable above and animates the button being pressed.
  buttonAnimation(buttonInnerHTML);

}


//This second function is another higher order event function that uses "keydown"- which
//allows for sound to be played on a click of a button. And again, here we defined the callback function with a variable.
document.addEventListener("keydown", function(event) {

//Note- the word event can be any word- it simply allows us to call back an attribute from the function. I.E here the attribute
//is key.

//Same thing for these two functions- 1st is for sound the next is for button animation.
//This utilizes a different input then above, the input here is the key that is given back when the keyboard is pressed.
  makeSound(event.key);

  buttonAnimation(event.key);
}
)



//The makeSound function takes in any variable and uses a switch function
function makeSound(key) {


//The switch function tries to make a case for the key that is inputed. If it matches up, the key is in luck and executes!
//Once the key executes, it breaks to prevent looping.
  switch (key) {
    case "w":
    var tom1= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/tom-1.mp3');
    tom1.play();
      break;

    case "a":
    var tom2= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/tom-2.mp3');
    tom2.play();
      break;

    case "s":
    var tom3= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/tom-4.mp3');
    tom4.play();
      break;

    case "j":
    var snare= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/snare.mp3');
    snare.play();
      break;

    case "k":
    var crash= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/crash.mp3');
    crash.play();
      break;

    case "l":
    var kick= new Audio('/Users/admin/Desktop/Drum Kit Starting Files/sounds/kick-bass.mp3');
    kick.play();
      break;
    }
}

//Finally the animation function takes in an input.
function buttonAnimation(currentkey) {

//Due to how we've defined the classes in the HTML file, this allows us to take them in using
//query selector and add another class to them.
var activeButton = document.querySelector("." + currentkey);

//The pressed class is added here, which is simply a CSS design class.
  activeButton.classList.add("pressed");


//The setTimeout function allows us to remove this class after a delay of 100miliseconds.
  setTimeout(function() {
    activeButton.classList.remove("pressed")}, 250);
}
