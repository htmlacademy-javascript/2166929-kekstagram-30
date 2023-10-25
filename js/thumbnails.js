import {createArrayOfPosts} from './data.js';

const posts = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsOfPosts = createArrayOfPosts;

const postsFragment = document.createDocumentFragment();

thumbnailsOfPosts.forEach(({url, description, likes, comments}) => {
  const postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__img').alt = description;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments.length;
  postsFragment.append(postElement);
});

posts.append(postsFragment);
