const getRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, isEscapeKey};
