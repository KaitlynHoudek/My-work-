function sayHelloWorld(){
    console.log("Hello, world!");
  }
  sayHelloWorld();

  function js(){
    console.log("I love JavaScript!");
  }
  js();

  // friendName is our parameter. It's a placeholder that we can use inside the function
function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }
  // When we call the function, we give it the actual name that we want to print.
greetAFriend("Dwayne");
greetAFriend("Katie");
greetAFriend("Juan");
greetAFriend("Kim");

function greetAFriend(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
  }

greetAFriend("Todd", "evening"); // Good evening, Todd!
greetAFriend("Jamie", "morning"); // Good morning, Jamie!
greetAFriend("Hannah", "afternoon"); // Good afternoon, Hannah!
greetAFriend("Norman", "midnight"); // Hello, Norman!


function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }
  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
  console.log(myPizza); 
  // Expected output: "A large pizza with wheat crust and green peppers, onions, pepperoni on top."
  console.log(yourPizza);
  // Expected output: "A medium pizza with white crust and green anchovies, feta, pineapple on top."


  