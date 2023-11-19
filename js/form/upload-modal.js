import {isEscapeKey} from '../util/util.js';
import {validatePristine, resetPristine, renderErrorMessages} from '../form/validate-form.js';
import {scalingImage, resetScalingImage} from '../form/photo-scale.js';
import {onEffectsListChange, initSlider} from '../form/photo-effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOpenButton = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCloseButton = document.querySelector('.img-upload__cancel');
const descriptionInput = document.querySelector('.text__description');
const hashtagsInput = document.querySelector('.text__hashtags');
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
  resetScalingImage();
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
  if (isEscapeKey(evt) && !evt.target.closest(`.${ descriptionInput }`) && !evt.target.closest(`.${ hashtagsInput }`)) {
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
  renderErrorMessages();
  scalingImage ();
  initSlider(currentEffect);
  uploadForm.addEventListener('submit', (evt) => onFormSubmit(evt));
  uploadOpenButton.addEventListener('change', onOpenModalButtonClick);
  effectsList.addEventListener('change', onEffectsListChange);
};

export {createUploadModal};
