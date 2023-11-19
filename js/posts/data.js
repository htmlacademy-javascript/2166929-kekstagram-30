import {getRandomInteger, getRandomArrayIndex, getRandomArrayElement} from '../util/util.js';

const POSTS_COUNT = 25;
const COMMENTS_COUNT = {
  min: 0,
  max: 30
};

const DESCRIPTIONS = [
  'Красивая фотография',
  'Очень красивая фотография',
  'Интересная фотография',
  'Очень интересная фотография'
];

const LIKES_COUNT = {
  min: 15,
  max: 200
};

const AVATARS_COUNT = {
  min: 1,
  max: 6
};

const NAMES = [
  'Даниил',
  'Михаил',
  'Татьяна',
  'Кристина',
  'Александр',
  'Анастасия'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let commentId = 1;
let postId = 1;

const createMessage = () => {
  let message = new Set(Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)));
  message = Array.from(message).join(' ');
  return message;
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${ getRandomArrayIndex(AVATARS_COUNT) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPost = () => ({
  id: postId,
  url: `photos/${ postId++ }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayIndex(LIKES_COUNT),
  comments: Array.from({length: getRandomArrayIndex(COMMENTS_COUNT)}, createComment)
});

const createArrayOfPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export {createArrayOfPosts};
