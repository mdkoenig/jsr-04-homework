var genders = ["male", "female"];
var names = ["Doctor Gonzo","Doonesbury","Periwinkle","Chipper","Elmer","Dolce","Babushka","Grover","Taxi","Rosebud","Ouija","Bossman","Truffles","Six Toes","Sadie","Seuss","Van Gogh","Bunk","Heidi"];
//var genders = ["male"]; // much easier to test with smaller numbers
//var names = ["Doctor Gonzo","Doonesbury"];  // much easier to test with smaller numbers
var dogsList = [];

document.getElementById('formSubmit').onclick = start;
document.getElementById('done').onclick = finishHandler;

function start()
{
  button(); // add the "Done Adopting" button
  inventoryCheck(); // check for dogs of that breed, if there are any left, add them
  doneCheck(); // check if all the dogs are "gone" and if so automatically finish adoptiong
  return false;
}

function button()
{
  if(document.getElementById("done").className = "hidden") {
      document.getElementById("done").className = "visibile";
  }
}

function inventoryCheck()
{
  var breed = document.getElementById("rescue").value;
  var count = 0;
  for(i = 0; i < dogsList.length; i++) {
    if(dogsList[i].breed === breed) {
      count += 1;
    }
  }
  if(count === (genders.length*names.length)) {
    console.log("I'm sorry, we're out of " + breed + "s would you like to try another breed or finish adopting?");
  } else {
    addDog();
  }
}

function addDog() 
{
    var goodDog = false;
    while(goodDog === false) {
      var dog = makeDog(); // make a random dog
      var goodDog = dogCheck(dog); // check to see if there's another dog that is exactly the same
    }
    console.log("Congrats on selecting " + dog.name + " the " + dog.gender + " " + dog.breed + "!");
    dogsList.push(dog);
}

function makeDog()
{
  var name, gender, breed;
  gender = rando(genders);
  name = rando(names);
  breed = document.getElementById("rescue").value;
  return new Dog(gender, name, breed);
}

function dogCheck(dog)
{
  for(i = 0; i < dogsList.length; i++) {
    if(dog.gender === dogsList[i].gender && dog.breed === dogsList[i].breed && dog.name === dogsList[i].name) {
      return false
    } else {
    }
  }
}

function doneCheck()
{
  if(document.getElementById("rescue").length*genders.length*names.length === dogsList.length) {
    finishHandler()
  }
}

function Dog(gender, name, breed) {
  this.gender = gender;
  this.name = name;
  this.breed = breed;
}

function rando(list) {
  return list[Math.floor(Math.random()*list.length)];
}

function finishHandler() {
  document.getElementById("done").className = "hidden";
  document.getElementById("formSubmit").className = "hidden";
  for(i = 0; i < dogsList.length; i++) {
    console.log("You've adopted a " + dogsList[i].gender + " " + dogsList[i].breed + " named " + dogsList[i].name);
  }
}