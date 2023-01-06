let passwordSize = 0;
// let passwordRepo =[];
let passwordRepo = [];
let generatedPassword = "";
let optionSelected = 0;
// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

function getPasswordOptions() {
  passwordRepo = [];
  let passwordLength = prompt(
    "Please enter the length of your password (A whole number between 10 and 64)"
  );
  if (passwordLength < 10 || passwordLength > 64 || passwordLength % 1 != 0) {
    getPasswordOptions();
  } else {
    passwordSize = passwordLength;
  }

  // Charachter options

  do {
    optionSelected = 0;

    let lowerCaseOption = confirm(
      "Do you want lowercase letters (You must select at least one option)?"
    );
    if (lowerCaseOption) {
      passwordRepo = passwordRepo.concat(lowerCasedCharacters);
      optionSelected++;
    }

    let upperCaseOption = confirm(
      "Do you want Uppercase letrers (You must select at least one option)?"
    );
    if (upperCaseOption) {
      passwordRepo = passwordRepo.concat(upperCasedCharacters);
      optionSelected++;
    }

    let numberOption = confirm(
      "Do you want numbers (You must select at least one option)?"
    );
    if (numberOption) {
      passwordRepo = passwordRepo.concat(numericCharacters);
      optionSelected++;
    }

    let specialCharOption = confirm(
      "Do you want specia charachters (You must select at least one option)?"
    );
    if (specialCharOption) {
     passwordRepo = passwordRepo.concat(specialCharacters);
      optionSelected++;
    }
    // return passwordRepoFinal=passwordRepo;
  } while (optionSelected < 1);


  console.log("Password size is: "+passwordSize);
  console.log(passwordRepo);
  console.log(optionSelected);
 
}



// console.log(passwordRepo);

// getPasswordOptions();

// Function for getting a random element from an array
function getRandom() {
  generatedPassword="";
  for (i = 0; i < passwordSize; i++) {
    generatedPassword = generatedPassword.concat(
      passwordRepo[Math.floor(Math.random() * passwordRepo.length)]
    );
  }
  console.log("The password is " + generatedPassword);
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
getRandom()
   return generatedPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
