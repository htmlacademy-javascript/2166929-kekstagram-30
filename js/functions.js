
// Функция для проверки длины строки.
const getStringLength = (string, length) => string.length <= length;

//console.log(getStringLength('проверяемая строка', 10));


// Функция для проверки, является ли строка палиндромом.
const getStringPalindrome = (stringPalindrome) => {
  let normalizedString = '';

  for (let i = stringPalindrome.length - 1; i >= 0; i--) {
    normalizedString += stringPalindrome[i];

  }

  return stringPalindrome.trim().toUpperCase().replaceAll(' ', '') === normalizedString.trim().toUpperCase().replaceAll(' ', '');
};

//console.log(getStringPalindrome('Лёша на полке клопа нашёл '));


// Функция для возврата извлеченных цифры от 0 до 9 из строки.
const getNumber = (string) => {
  string = string.toString();
  let stringToNumber = '';

  for (let i = 0; i < string.length; i++) {
    stringToNumber += parseInt(string[i], 10);
  }

  stringToNumber = stringToNumber.replace(/[^0-9]/g,'');

  if (!Number.isNaN(stringToNumber) && stringToNumber.length > 0) {
    return Number(stringToNumber);
  }

  return NaN;
};

//console.log(getNumber('1 кефир, 0.5 батона'));
