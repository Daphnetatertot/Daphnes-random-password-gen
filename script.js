// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var numbers = "0123456789".split('')
var specialChars = "!#@%^*$".split('')
var passwordLegnthPrompt = window.prompt("How long would you like your password to be?")
var hasLowercase = window.confirm("Would you like lowercase letters?")



function generatePassword() {
  console.log("Generating password...")
  var result =[]
  var passwordLegnth = Number.parseInt(passwordLegnthPrompt)
  var charArray = []
  var guaranteedChars = []
  

  //sets the min & max characters allowed
  if (passwordLegnth < 8 || passwordLegnth > 128) {
    console.log(passwordLegnth)
    window.alert("Your password must be at least 8 characters, and less than 128 characters!")
    return null
  }

  if (hasLowercase) {
    charArray = charArray.concat(lowercase)
    guaranteedChars.push(getRandomIndex(lowercase))

  }

  if (upperCase) {
    charArray = charArray.concat(upperCase) 
    guaranteedChars.push(getRandomIndex(upperCase))
   

  }

  var i = 0;
  var j = 0;
  while (i < passwordLegnth) {
    var possibleChar = getRandomIndex(charArray)
    result.push(possibleChar)
    console.log(result)
    i++
  }
  while (j < guaranteedChars.length) {
    console.log("result index, guaranteed chars index", result[j], guaranteedChars[j])
    result[j] = guaranteedChars[j]
    j++
    
  }

  return result.join('')


}
// item is an array
function getRandomIndex(item = []) {
  var index = Math.floor(Math.random() * item.length)
  return item[index]

}
console.log(getRandomIndex())

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


