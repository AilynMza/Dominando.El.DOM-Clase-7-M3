const rangeContainer = document.querySelector(".range-container");
const inputRange = document.querySelector(".range-container input");
const generateBtn = document.querySelector(".generator form button");

const mayusCheckbox = document.querySelector("#mayusCheckbox")
const minusCheckbox = document.querySelector("#minusCheckbox")
const numberCheckbox = document.querySelector("#numberCheckbox")
const symbolCheckbox = document.querySelector("#symbolCheckbox")

const securityLabel = document.querySelector('.level-security p');

const security = [
    {label: "N/A", color:'rgb(224, 65, 65)' },
    {label: "Inseguro █", color:'rgb(96, 60, 238)' },
    {label: "Poco Seguro █ █", color:'rgb(88, 104, 246)' },
    {label: "Seguro █ █ █", color:'rgb(157, 153, 237)' },
    {label: "Muy Seguro █ █ █ █", color:'rgb(125, 146, 210)' }
]

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
  const isMayus = mayusCheckbox.checked;
  const isMinus = minusCheckbox.checked;
  const isNumber = numberCheckbox.checked;
  const isSymbol = symbolCheckbox.checked;
  
  if(!isMayus && !isMinus && !isNumber && !isSymbol){
    alert('Selecciona al menos una opción');
    return 'GirliePass';
  }

  let finalPassword = "";
  while (finalPassword.length < passwordLength) {
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

//Función para nivel de seguridad de contraseña
const strengthPassword = () => {
    const isMayus = mayusCheckbox.checked;
    const isMinus = minusCheckbox.checked;
    const isNumber = numberCheckbox.checked;
    const isSymbol = symbolCheckbox.checked;

    let counter = 0;
    if(isMayus) counter++;
    if(isMinus) counter++;
    if(isNumber) counter++;
    if(isSymbol) counter++;

    return security[counter];
}

const printPassword = (event) => {
  event.preventDefault();
  const inputValue = inputRange.value;
  const password = generatePassword(inputValue);
  const passwordHeading = document.querySelector(".password-container h1");
  passwordHeading.textContent = password;

  const securityLevel = strengthPassword();
  securityLabel.textContent = securityLevel.label;
  securityLabel.style.color = securityLevel.color;
};

inputRange.addEventListener("change", () => handleChange());
generateBtn.addEventListener("click", (event) => printPassword(event));

