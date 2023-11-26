import {createPost} from './thumbnail-post.js';
import {debounce, shuffleElements} from '../util/util.js';

const CURRENT_FILTER = 'img-filters__button--active';
const RANDOM_POSTS_MAX_COUNT = 10;

const postFilters = document.querySelector('.img-filters');
const filtersButtonsContainer = document.querySelector('.img-filters__form');

const showFiltersButton = () => postFilters.classList.remove('img-filters--inactive');

const createRandomPosts = (posts) => {
  const elements = posts.slice();
  return shuffleElements(elements).slice(0, RANDOM_POSTS_MAX_COUNT);
};

const createDiscussedPosts = (posts) => posts.slice().sort((currentPost, nextPost) => nextPost.comments.length - currentPost.comments.length);

const deletePosts = () => document.querySelectorAll('.picture').forEach((element) => element.remove());

const createPosts = debounce((posts) => {
  deletePosts();
  posts.forEach((postDate) => createPost(postDate));
});

const changCurrentButton = (evt) => {
  document.querySelector(`.${CURRENT_FILTER}`).classList.remove(`${CURRENT_FILTER}`);
  evt.target.classList.add(`${CURRENT_FILTER}`);
};

const isButtonSort = (evt) => {
  if (!evt.target.matches('.img-filters__button')) {
    return;
  }
  changCurrentButton(evt);
};

function onFilterButtonClick(evt, posts) {
  isButtonSort(evt);

  if (evt.target.matches('#filter-default')) {
    createPosts(posts);
  }

  if (evt.target.matches('#filter-random')) {
    createPosts(createRandomPosts(posts));
  }

  if (evt.target.matches('#filter-discussed')) {
    createPosts(createDiscussedPosts(posts));
  }
}

const createSortPosts = (posts) => {
  showFiltersButton();
  createPosts(posts);
  filtersButtonsContainer.addEventListener('click', (evt) => onFilterButtonClick(evt, posts));
};

export {createSortPosts};
