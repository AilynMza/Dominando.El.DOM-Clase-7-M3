const rangeContainer = document.querySelector('.range-container');
const inputRange = document.querySelector('.range-container input')
const generateBtn = document.querySelector('.generator form button');
    //      from  -  to
    // Mayus 0 a     25
    // Minus 26 a    51
    // Numero 52 a   61
    // Simbolos 62 a 67
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

const handleChange = () => {
    const inputValue = inputRange.value;
    const lengthCounter = document.querySelector('.range-container h1');
    lengthCounter.textContent = inputValue;
}

const generatePassword = (passwordLength) => {
    let result = '';    
    for(let i = 0; i < passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}

// Función para obtener un número random entre dos rangos de valores
const getRandomBetween = (from, to) => {
    return from+(Math.floor(Math.random()*(to-from+1)));
}

// Obtener Mayus Aleatoria
const getRandomMayus = () => {
    const randomMayusIndex = getRandomBetween(0,25);
    let characterMayus = characters.slice(randomMayusIndex, randomMayusIndex+1);
    return characterMayus
}
// Obtener Minuscula Aleatoria
const getRandomMinus = () => {
    const randomMayusIndex = getRandomBetween(26,51);
    let characterMayus = characters.slice(randomMinusIndex, randomMayusIndex+1);
    return characterMinus
}
// Obtener Números Aleatorios
const getRandomNumber = () => {
    const randomMayusIndex = getRandomBetween(52,61);
    let characterMayus = characters.slice(randomNumberIndex, randomMayusIndex+1);
    return characterNumber
}
// Obtener Simbolos Aleatorios
const getRandomSimbol = () => {
    const randomMayusIndex = getRandomBetween(62,67);
    let characterMayus = characters.slice(randomSimbolIndex, randomMayusIndex+1);
    return characterSimbol
}


const printPassword = (event) => {
    event.preventDefault();
    const inputValue = inputRange.value;
    const password = generatePassword(inputValue);
    const passwordHeading = document.querySelector('.password-container h1');
    passwordHeading.textContent = password;
}

inputRange.addEventListener('change', () => handleChange());
generateBtn.addEventListener('click', (event) => printPassword(event));

