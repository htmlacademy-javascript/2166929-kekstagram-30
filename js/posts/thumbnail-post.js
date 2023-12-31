import {renderFullSizePost} from './full-size-posts';

const posts = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPost = (post) => {
  const postElement = postTemplate.cloneNode(true);
  const image = postElement.querySelector('.picture__img');
  image.src = post.url;
  image.alt = post.description;
  postElement.querySelector('.picture__likes').textContent = post.likes;
  postElement.querySelector('.picture__comments').textContent = post.comments.length;

  postElement.addEventListener ('click', (evt) => {
    evt.preventDefault();
    renderFullSizePost(post);
  });

  posts.append(postElement);
};

export {createPost};
