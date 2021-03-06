// Assignment Code
var generateBtn = document.querySelector("#generate");

// random elements
const lettersUpper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

const lettersLower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const symbols = ["!", "@", "#", "$", "%", "&", "*"]

// Write password to the #password input
var passwordArray = [];

// var lettersUpperString = lettersUpper.join("");
// console.log(lettersUpperString)

// prompts for password length
var passwordLengthOutside = []

function checkPasswordLength() {
  var passwordLengthSmall = prompt("How long would you like your password? (8-128)")
  if (passwordLengthSmall > 128 || passwordLengthSmall < 8) {
    alert("Error! Not within acceptable length");
    checkPasswordLength();
    return;
  } else {
    console.log(passwordLengthSmall);
    passwordLengthOutside.push(passwordLengthSmall);
  }
}


// console.log(passwordLengthOutside)
function generatePassword() {
  passwordArray = []
  passwordLengthOutside = []
  checkPasswordLength()
console.log(passwordLengthOutside)  
  var passwordLength = passwordLengthOutside[0]
  
  var lowerPrompt = confirm("Do you want Lowercase Letters?")
  console.log(lowerPrompt);
  var upperPrompt = confirm("Do you want Uppercase Letters?")
  console.log(upperPrompt);
  var numberPrompt = confirm("Do you want Numbers?")
  console.log(numberPrompt);
  var symbolPrompt = confirm("Do you want Symbols?")
  console.log(symbolPrompt);


  while (passwordArray.length < passwordLength) {
    if (lowerPrompt && (passwordArray.length < passwordLength)) {
      var selectorLettersLower = Math.floor(Math.random() * lettersUpper.length)
      passwordArray.push(lettersLower[selectorLettersLower])
    }
    if (upperPrompt && (passwordArray.length < passwordLength)) {
      var selectorLettersUpper = Math.floor(Math.random() * 26)
      passwordArray.push(lettersUpper[selectorLettersUpper])
    }
    if (numberPrompt && (passwordArray.length < passwordLength)) {
      var selectorNumbers = Math.floor(Math.random() * 10)
      passwordArray.push(numbers[selectorNumbers])
    }
    if (symbolPrompt && (passwordArray.length < passwordLength)) {
      var selectorSymbols = Math.floor(Math.random() * 7)
      passwordArray.push(symbols[selectorSymbols])
    }
  }
  console.log(passwordArray)
  return passwordArray.join("")
}
var passwordFinal = passwordArray.join("");

console.log(passwordFinal)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//TODO: write the generatePassword function

//TODO: ask user how many characters they want in the password
//TODO: Write a series of 4 confirms to check if the user wants one of the options
//TODO: write 4 arrays that each contain one of the individual sets of requirements: one for lowercase, one upper, one numeric, one special.
//TODO: check that the prompts true or false and add true responses and the associated arrays to a "holding array"
//TODO: check that we have at least one of the types
//TODO: take our holding array and randomize the values inside -> adding to a secondary array
//TODO: take the randomized characters and select the amount that the user has chosen for their password length -> add these to a "return array"
//TODO: take our "return array" and use array methods to convert to a string and return the string

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page