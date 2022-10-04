// Assignment code here




function generatePassword() {
  var passwordCharacters = [];
  
  var passwordLength = parseInt(prompt("Choose a password length (must be between 8 and 128)"));
    if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128");
      return "No Password Generated"
    } ;
  
  var incLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
    if (confirm("Would you like to include lowercase characters?")){
      passwordCharacters = passwordCharacters.concat(incLowerCase);
    }
  
  var incUpperCase = incLowerCase.map(element => {
    return element.toUpperCase();
  });
    if (confirm("Would you like to include uppercase characters?")){
      passwordCharacters = passwordCharacters.concat(incUpperCase);
    }
  
  var incNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (confirm("Would you like to include numbers?")){
      passwordCharacters = passwordCharacters.concat(incNum);
    }
  
  var incSpecialChar = ["!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    if (confirm("Would you like to include special characters?")){
      passwordCharacters = passwordCharacters.concat(incSpecialChar);
    }
  
  var securePassword = "";
  for (var i = 0; i < passwordLength; i++){
    var randomCharacters = Math.floor(Math.random() * passwordCharacters.length); 
    securePassword = securePassword + passwordCharacters[randomCharacters];

  }

  return securePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
