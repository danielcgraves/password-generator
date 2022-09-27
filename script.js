// Assignment code here



function generatePassword(){
  var passwordLength = parseInt(prompt("Choose a password length (must be between 8 and 128)"))
    if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128")
    } else  {
      console.log(passwordLength)
       }
  
/*   var incLowercase = confirm("Would you like to include lowercase characters?")
    console.log(incLowercase);

  var incUppercase = confirm("Would you like to include lowercase characters?")
    console.log(incUppercase);
  
  var incNum = confirm("Would you like to include lowercase characters?")
  console.log(incNum);

  var incSpecialChar = confirm("Would you like to include lowercase characters?")
  console.log(incSpecialChar); */


//4. Validate the input and at least one character type should be selected


//5. Generate password (meets accepted criteria)


//6. Password is either generated to page or alerted.

  return "hola";
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
