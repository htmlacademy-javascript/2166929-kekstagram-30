const getRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

const getRandomArrayIndex = (elements) => getRandomInteger(elements.min, elements.max);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomArrayIndex, getRandomArrayElement, isEscapeKey};
