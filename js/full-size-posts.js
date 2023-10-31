import {isEscapeKey} from './util.js';

const modalContainer = document.querySelector('.big-picture');
const bigPicture = document.querySelector('.big-picture__img').querySelector('img');
const likeCount = document.querySelector('.likes-count');
const postTitle = document.querySelector('.social__caption');
const modalButtonClose = document.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const defaultComment = document.querySelector('.social__comment');

const openModal = () => {
  modalContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  modalContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

modalButtonClose.addEventListener('click', () => {
  closeModal();
});

const renderPostInfo = (post) => {
  commentsContainer.innerHTML = '';
  bigPicture.src = post.url;
  bigPicture.alt = post.description;
  likeCount.textContent = post.likes;
  postTitle.textContent = post.description;
};

const createComment = (comment) => {
  const newComment = defaultComment.cloneNode(true);
  const commentAvatar = newComment.querySelector('.social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const renderComments = (comments) => {
  comments.forEach((comment) => commentsContainer.append(createComment(comment)));
};

const renderFullSizePost = (post) => {
  openModal();
  renderPostInfo(post);
  renderComments(post.comments);
};

export {renderFullSizePost};
