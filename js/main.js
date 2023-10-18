const NUMBER_OF_POSTS = 25;
const NUMBERS_OF_COMMENTS = [0, 30];

const DESCRIPTIONS = [
  'Красивая фотография',
  'Очень красивая фотография',
  'Интересная фотография',
  'Очень интересная фотография'
];

const NUMBERS_OF_LIKES = [15, 200];
const NUMBERS_OF_AVATARS = [1, 6];

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayIndex = (elements) => getRandomInteger(elements[0], elements[1]);
const getRandomArrayString = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let previousId = 0;

  return () => {
    previousId += 1;
    return previousId;
  };
};

const generateCommentId = createIdGenerator();

const createRandomMessage = () => getRandomArrayString(MESSAGES);
const createArrayOfMessage = () => Array.from({length: getRandomInteger(1, 2)}, createRandomMessage). join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomArrayIndex(NUMBERS_OF_AVATARS) }.svg`,
  message: createArrayOfMessage(),
  name: getRandomArrayString(NAMES)
});

const createPost = () => ({
  id: 0,
  url: 0,
  description: getRandomArrayString(DESCRIPTIONS),
  likes: getRandomArrayIndex(NUMBERS_OF_LIKES),
  createArrayOfComments: Array.from({length: getRandomArrayIndex(NUMBERS_OF_COMMENTS)}, createComment)
});

const createArrayOfPosts = Array.from({length: NUMBER_OF_POSTS}, createPost);

createArrayOfPosts.forEach(() => {
  for (let i in createArrayOfPosts) {
    createArrayOfPosts[i].id = ++i;
  }

  for (let i in createArrayOfPosts) {
    createArrayOfPosts[i].url = `photos/${ ++i }.jpg`;
  }
});
