var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\", "]

console.log(generatePassword);




var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var possibleCharacters = []
var finalarray = []

function generatePassword() {
  console.log("hey");
  var passwordlength = window.prompt("How long would you like your password to be? ")
  console.log(passwordlength)


  if (passwordlength < 8) {
    alert("the password has to be at least 8 characters!")
    return
  }
  if (passwordlength > 128) {
    alert("the password has to be less than 128 characters!")
    return
  }

  var confirmLower = window.confirm("Would you like lower case characters in your password? ")
  var confirmUpper = window.confirm("Would you like upper case characters in your password? ")
  var confirmSpecialChar = window.confirm("Would you like to include special characters in your password? ")
  var confirmNumber = window.confirm("Would you like numbers in your password? ")

  if (confirmLower == true) {
    possibleCharacters = possibleCharacters.concat(smallLetters)
  }
  if (confirmUpper == true) {
    possibleCharacters = possibleCharacters.concat(capitalLetters)
  }
  if (confirmSpecialChar == true) {
    possibleCharacters = possibleCharacters.concat(specialChar)
  }
  if (confirmNumber == true) {
    possibleCharacters = possibleCharacters.concat(numbers)
  }


  for (var i = 0; i < passwordlength; i++) {
    var getindex = Math.floor(Math.random() * possibleCharacters.length)
    var indexvalue = possibleCharacters[getindex]
    finalarray.push(indexvalue)
    console.log(finalarray)

  }






  return finalarray.join("")
}