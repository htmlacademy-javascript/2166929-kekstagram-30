import {isEscapeKey} from '../util/util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const createMessage = (element, buttonClass) => {
  document.body.append(element);
  const messageCloseButton = element.querySelector(buttonClass);
  messageCloseButton.addEventListener('click', onMessageCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onBodyClick);
};

const createFormSuccessMessage = () => {
  const newSuccessMessage = successMessageTemplate.cloneNode(true);
  createMessage(newSuccessMessage, '.success__button');
};

const createFormErrorMessage = () => {
  const newErrorMessage = errorMessageTemplate.cloneNode(true);
  createMessage(newErrorMessage, '.error__button');
};

const closeMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onBodyClick);
};

function onMessageCloseButtonClick() {
  closeMessage();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  closeMessage();
}

export {createFormSuccessMessage, createFormErrorMessage};
