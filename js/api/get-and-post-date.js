import {getServerDate, postServerDate} from './date.js';
import {createPosts} from '../posts/thumbnails-posts.js';
import {createServerErrorMessage} from '../posts/posts-error-message.js';
import {createDisabledSubmitButton, closeModal} from '../form/upload-form.js';
import {createFormSuccessMessage, createFormErrorMessage} from '../form/form-error-messages.js';

const getDate = async () => {
  try {
    const pictures = await getServerDate();
    createPosts(pictures);
  } catch {
    createServerErrorMessage();
  }
};

const submitForm = async (formElement) => {
  try {
    createDisabledSubmitButton(true);
    await postServerDate(new FormData(formElement));
    closeModal();
    createFormSuccessMessage();
  } catch {
    createFormErrorMessage();
    createDisabledSubmitButton(false);
  }
};

export {getDate, submitForm};
