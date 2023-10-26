import {createArrayOfPosts} from './data.js';

const posts = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsOfPosts = createArrayOfPosts();

const createPost = (date) => {
  const postElement = postTemplate.cloneNode(true);
  const image = postElement.querySelector('.picture__img');
  image.src = date.url;
  image.alt = date.description;
  postElement.querySelector('.picture__likes').textContent = date.likes;
  postElement.querySelector('.picture__comments').textContent = date.comments.length;
  posts.append(postElement);
};

const createPosts = () => {
  thumbnailsOfPosts.forEach((postDate) => {
    createPost(postDate);
  });
};

export {createPosts};
