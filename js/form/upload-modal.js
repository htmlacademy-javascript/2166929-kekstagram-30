import {isEscapeKey} from '../util.js';
import {validatePristine, resetPristine, renderErrorMessages} from '../form/validate-form.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOpenButton = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCloseButton = document.querySelector('.img-upload__cancel');
const descriptionInput = document.querySelector('.text__description');
const hashtagsInput = document.querySelector('.text__hashtags');

const openModal = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  uploadCloseButton.addEventListener('click', onCloseUploadButtonClick);
  uploadOpenButton.addEventListener('change', onOpenModalButtonClick);
  uploadForm.addEventListener('submit', (evt) => onFormSubmit(evt));
};

const closeModal = () => {
  resetPristine();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
  uploadCloseButton.removeEventListener('click', onCloseUploadButtonClick);
};

function onOpenModalButtonClick() {
  document.body.classList.add('modal-open');
  uploadModal.classList.remove('hidden');
  openModal();
}

function onCloseUploadButtonClick() {
  closeModal();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !evt.target.closest(descriptionInput) && !evt.target.closest(hashtagsInput)) {
    evt.preventDefault();
    closeModal();
  }
}

function onFormSubmit(evt) {
  if(!validatePristine()) {
    evt.preventDefault();
  }
}

const createUploadModal = () => {
  openModal();
  renderErrorMessages();
};

export {createUploadModal};
