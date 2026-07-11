const inputPassword = document.getElementById("password");
const lengthSlider = document.getElementById("length-slider");
const countNumber = document.getElementById("count");
const uppercaseCheckbox = document.getElementById("upperCase");
const lowercaseCheckbox = document.getElementById("lowerCase");
const numberCheckbox = document.getElementById("numbers");
const symbolCheckbox = document.getElementById("symbol");
const generatorButton = document.getElementById("generator-btn");
const copyButton = document.getElementById("icon");
const strengthDetect = document.getElementById("strength");
const strengthIndicator = document.getElementById("strength-indicator");
//characters set
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "~`!@#$%^&*:';?,./><[]{}\|";
let allchar = "";
lengthSlider.addEventListener("input", () => {
  countNumber.textContent = lengthSlider.value;
});
generatorButton.addEventListener("click", makePassword);
function makePassword() {
  if (lowercaseCheckbox.checked) {
    allchar += lowercaseLetters;
  }
  if (uppercaseCheckbox.checked) {
    allchar += uppercaseLetters;
  }
  if (numberCheckbox.checked) {
    allchar += numberCharacters;
  }
  if (symbolCheckbox.checked) {
    allchar += symbolCharacters;
  }
  const passwordLength = Number(lengthSlider.value);
  let password = "";
  for (i = 0; i < passwordLength; i++) {
    if (allchar.length === 0) {
      inputPassword.value = "";
      alert("Please checked any one of the checkbox");
      break;
    }
    const randomIndex = Math.floor(Math.random() * allchar.length);
    password += allchar[randomIndex];
  }
  inputPassword.value = password;
  if (inputPassword.value.length <= 8 && inputPassword.value.length != 0) {
    document.getElementById("strength").innerText = "weak";
    document.getElementById("strength-bar").style.background = "brown";
    document.getElementById("strength-bar").style.minWidth = "28%";
  } else if (
    inputPassword.value.length <= 18 &&
    inputPassword.value.length != 0
  ) {
    document.getElementById("strength").innerText = "medium";
    document.getElementById("strength-bar").style.background = "yellow";
    document.getElementById("strength-bar").style.minWidth = "58%";
  } else if (
    inputPassword.value.length <= 24 &&
    inputPassword.value.length != 0
  ) {
    document.getElementById("strength").innerText = "strong";
    document.getElementById("strength-bar").style.background = "green";
    document.getElementById("strength-bar").style.minWidth = "100%";
  } else {
    document.getElementById("strength").innerText = "weak";
    document.getElementById("strength-bar").style.background = "brown";
    document.getElementById("strength-bar").style.minWidth = "10%";
  }
}
copyButton.addEventListener("click",()=>{
    if(inputPassword.value.length>0)
    {
  alert("you have copied the password");
    }
    else
    {
        alert("please click password generator");
    }
})