var firstName = "Kaitlyn";
var lastName = "Houdek";
var age = 19;
var likesTravel = true;

var fullname= firstName + " " + lastName;
fullName2 = '$(firstName) $(lastName)';

var grabBagArray = [1, "Hello, world", true]

var tempArray = [80, 85, 84];
var tempArray2 = [tempArray[0], "My favorite weather this week."];

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
months.splice(4, 1, 'May');

var movieArray = "Heathers, SpongeBob Movie, The last unicorn";

var KaitlynObject = {
    firstName: "Kaitlyn",
    lastName: "Houdek",
    age: 19
    
  }

  var highTemperatures = [55, 57, 53, 47, 56, 50];
  var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
  
  var todaysWeather = {
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  }

  var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

   var dwayneObject = {
    firstName: "Dwayne",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }

console.log(firstName);
console.log(lastName);
console.log( age);
console.log(likesTravel);

console.log(fullname);
console.log(fullName2);

console.log(tempArray[1]);
console.log(tempArray2);

console.log(months);

console.log(movieArray);

console.log(KaitlynObject.firstName); // "Kaitlyn"
console.log(KaitlynObject.age); // 19
console.log(KaitlynObject.hobbies); // "drawing"

console.log(weatherForecast.Today);
console.log(weatherForecast.Saturday);
console.log(weatherForecast.Sunday);

console.log(highTemperatures[0]);
console.log(highTemperatures[1]);
console.log(highTemperatures[2]);
console.log(highTemperatures[3]);
console.log(highTemperatures[4]);
console.log(highTemperatures[5]);

console.log(lowTemperatures[0]);
console.log(lowTemperatures[1]);
console.log(lowTemperatures[2]);
console.log(lowTemperatures[3]);
console.log(lowTemperatures[4]);
console.log(lowTemperatures[5]);

console.log(dwayneObject.firstName); //"Dwayne"
console.log(dwayneObject.lastName); //"Johnson"
console.log( dwayneObject.favoriteFood) //"Eggs"


if(2+2 === 4){
console.log("Math works!");
}

var time ="afternoon";
if (time === "morning"){
  console.log("Good morning!");
} else if (time === "afternoon"){
  console.log("Good afternoon!");
} else if (time === "evening"){
  console.log("Good evening!");
} else {
  console.log("Hello!");
}
