
const checkStringLength = (string, length) => string.length <= length;

const checkPalindrome = (stringPalindrome) => {
  stringPalindrome = stringPalindrome.toUpperCase().replaceAll(' ', '');
  let normalizedString = '';

  for (let i = stringPalindrome.length - 1; i >= 0; i--) {
    normalizedString += stringPalindrome[i];
  }

  return stringPalindrome === normalizedString;
};

const getNumber = (string) => {
  string = string.toString().replace(/[^0-9]/g,'');
  return parseInt(string, 10);
};
