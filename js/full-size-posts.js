import {escapeKey} from './util.js';

const COMMENTS_COUNT_SHOWN = 5;

const modal = document.querySelector('.big-picture');
const modalButtonClose = document.querySelector('.big-picture__cancel');
const fullSizePicture = document.querySelector('.big-picture__img').querySelector('img');
const likeCount = document.querySelector('.likes-count');
const postTitle = document.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsButtonLoading = document.querySelector('.comments-loader');

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

const createShownComments = (comments) => {
  commentsList.innerHTML = '';
  comments.forEach((comment) => createComment(comment));
  for (let i = COMMENTS_COUNT_SHOWN; i < comments.length; i++) {
    commentsList.children[i].classList.add('hidden');
  }

  if (comments.length <= COMMENTS_COUNT_SHOWN) {
    commentsButtonLoading.classList.add('hidden');
  }

  commentTotalCount.textContent = comments.length;
  commentShownCount.textContent = comments.slice(0, COMMENTS_COUNT_SHOWN).length;
};

const onButtonLoadingClick = () => {
  const commentsHidden = document.querySelectorAll('.social__comment.hidden');

  for (let i = 0; i < COMMENTS_COUNT_SHOWN; i++) {
    if (commentsHidden[i]) {
      commentsHidden[i].classList.remove('hidden');
    }
  }

  commentShownCount.textContent = commentsList.children.length + COMMENTS_COUNT_SHOWN - commentsHidden.length;

  if (commentsHidden.length <= COMMENTS_COUNT_SHOWN) {
    commentsButtonLoading.classList.add('hidden');
    commentShownCount.textContent = commentsList.children.length;
  }
};

const openModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentsButtonLoading.addEventListener('click', onButtonLoadingClick);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsButtonLoading.classList.remove('hidden');
  commentsButtonLoading.removeEventListener('click', onButtonLoadingClick);
};

function onDocumentKeydown(evt) {
  if (escapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

modalButtonClose.addEventListener('click', closeModal);

const renderFullSizePost = (post) => {
  openModal();
  renderPostInfo(post);
  createShownComments(post.comments);
};

export {renderFullSizePost};
