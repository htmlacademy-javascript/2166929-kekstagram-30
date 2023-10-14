
const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 20);

const checkPalindrome = (stringPalindrome) => {
  stringPalindrome = stringPalindrome.toUpperCase().replaceAll(' ', '');
  let normalizedString = '';

  for (let i = stringPalindrome.length - 1; i >= 0; i--) {
    normalizedString += stringPalindrome[i];
  }

  return stringPalindrome === normalizedString;
};

checkStringLength('топот');

const getNumber = (string) => {
  string = string.toString().replace(/[^0-9]/g,'');
  return parseInt(string, 10);
};

checkStringLength('2023 год');
