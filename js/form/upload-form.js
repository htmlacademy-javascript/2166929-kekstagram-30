import {isEscapeKey} from '../util/util.js';
import {validatePristine, resetPristine, renderErrorMessages} from './validate-form.js';
import {scaleImage, resetScaleImage} from './photo-scale.js';
import {onEffectsListChange, initSlider} from './photo-effects.js';
import {submitForm} from '../api/get-and-submit-data.js';
import {uploadPhoto, resetUploadPhoto} from './upload-photo-for-post.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOpenButton = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCloseButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const effectsList = document.querySelector('.img-upload__effects');
const currentEffect = document.querySelector('.effects__radio:checked');

const openModal = () => {
  document.body.classList.add('modal-open');
  uploadModal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadCloseButton.addEventListener('click', onCloseUploadButtonClick);
};

const closeModal = () => {
  resetPristine();
  resetScaleImage();
  initSlider(currentEffect);
  uploadForm.reset();
  resetUploadPhoto();
  document.body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCloseButton.removeEventListener('click', onCloseUploadButtonClick);
};

const createDisabledSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
};

function onOpenModalButtonClick(evt) {
  uploadPhoto(evt);
  openModal();
}

function onCloseUploadButtonClick() {
  closeModal();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.text__description') && !evt.target.closest('.text__hashtags') && !document.querySelector('.error')) {
    evt.preventDefault();
    closeModal();
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if(validatePristine()) {
    submitForm(evt.target);
  }
}

const createUploadModal = () => {
  renderErrorMessages();
  scaleImage ();
  initSlider(currentEffect);
  effectsList.addEventListener('change', onEffectsListChange);
  uploadOpenButton.addEventListener('change', onOpenModalButtonClick);
  uploadForm.addEventListener('submit', onFormSubmit);
};

export {createUploadModal, createDisabledSubmitButton, closeModal};
