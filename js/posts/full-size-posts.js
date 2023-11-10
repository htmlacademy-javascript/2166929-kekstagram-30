import {isEscapeKey} from '../util.js';

const COMMENTS_COUNT = 5;

const modal = document.querySelector('.big-picture');
const modalCloseButton = document.querySelector('.big-picture__cancel');
const fullSizePicture = document.querySelector('.big-picture__img img');
const likeCount = document.querySelector('.likes-count');
const postTitle = document.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsLoadingButton = document.querySelector('.comments-loader');

let comments = [];
let commentShown = 0;

const renderPostInfo = (post) => {
  fullSizePicture.src = post.url;
  fullSizePicture.alt = post.description;
  likeCount.textContent = post.likes;
  postTitle.textContent = post.description;
};

const createComment = (comment) => {
  const newComment = commentTemplate.cloneNode(true);
  const commentAvatar = newComment.querySelector('.social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  commentsList.append(newComment);
};

const fillCommentsCount = () => {
  commentShownCount.textContent = Math.min(commentShown, comments.length);
};

const setStateButton = () => {
  commentsLoadingButton.classList.toggle('hidden',commentShown >= comments.length);
};

const showComments = () => {
  comments.slice(commentShown, commentShown + COMMENTS_COUNT).forEach((comment) => createComment(comment));
  commentShown = commentShown + COMMENTS_COUNT;
  fillCommentsCount();
  setStateButton();
};

const onButtonLoadingClick = () => {
  showComments();
};

const openModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoadingButton.addEventListener('click', onButtonLoadingClick);
  modalCloseButton.addEventListener('click', onModalCloseButton);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoadingButton.removeEventListener('click', onButtonLoadingClick);
  modalCloseButton.removeEventListener('click', onModalCloseButton);
  commentShown = 0;
};

function onModalCloseButton () {
  closeModal();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const renderFullSizePost = (post) => {
  comments = post.comments;
  commentsList.innerHTML = '';
  commentTotalCount.textContent = comments.length;
  openModal();
  renderPostInfo(post);
  showComments();
};

export {renderFullSizePost};
