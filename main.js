const rangeContainer = document.querySelector(".range-container");
const inputRange = document.querySelector(".range-container input");
const generateBtn = document.querySelector(".generator form button");

const mayusCheckbox = document.querySelector()

//      from  -  to
// Mayus 0 a     25
// Minus 26 a    51
// Numero 52 a   61
// Simbolos 62 a 67
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

const handleChange = () => {
  const inputValue = inputRange.value;
  const lengthCounter = document.querySelector(".range-container h1");
  lengthCounter.textContent = inputValue;
};

const generatePassword = (passwordLength) => {
  const isMayus = true;
  const isMinus = true;
  const isNumber = true;
  const isSymbol = true;
  let finalPassword = "";

  while (finalPassword.length < passwordLength) {
    console.log(finalPassword);
    if (isMayus && finalPassword.length < passwordLength) {
      finalPassword += getRandomCharacterBetween(0, 25);
    }
    if (isMinus && finalPassword.length < passwordLength) {
      finalPassword += getRandomCharacterBetween(26, 51);
    }
    if (isNumber && finalPassword.length < passwordLength) {
      finalPassword += getRandomCharacterBetween(52, 61);
    }
    if (isSymbol && finalPassword.length < passwordLength) {
      finalPassword += getRandomCharacterBetween(62, 67);
    }
  }

  finalPassword = shuffleString(finalPassword);
  return finalPassword;
};

// Función para mezclar la cadena
function shuffleString(str) {
  let arr = str.split(""); 
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Deconstruir para intercambia los elementos
  }
  return arr.join("");
}

// Función para obtener un número random entre dos rangos de valores
const getRandomCharacterBetween = (from, to) => {
  const randomCharacterIndex =
    from + Math.floor(Math.random() * (to - from + 1));
  return characters.charAt(randomCharacterIndex);
};

const printPassword = (event) => {
  event.preventDefault();
  const inputValue = inputRange.value;
  const password = generatePassword(inputValue);
  console.log(password);
  const passwordHeading = document.querySelector(".password-container h1");
  passwordHeading.textContent = password;
};

inputRange.addEventListener("change", () => handleChange());
generateBtn.addEventListener("click", (event) => printPassword(event));


//Función para checbox
