import {getServerData, postServerData} from './data.js';
import {createPosts} from '../posts/thumbnails-posts.js';
import {createServerErrorMessage} from '../posts/posts-error-message.js';
import {createDisabledSubmitButton, closeModal} from '../form/upload-form.js';
import {createFormSuccessMessage, createFormErrorMessage} from '../form/form-error-messages.js';

const getData = async () => {
  try {
    const pictures = await getServerData();
    createPosts(pictures);
  } catch {
    createServerErrorMessage();
  }
};

const submitForm = async (formElement) => {
  try {
    createDisabledSubmitButton(true);
    await postServerData(new FormData(formElement));
    closeModal();
    createFormSuccessMessage();
    createDisabledSubmitButton(false);
  } catch {
    createFormErrorMessage();
    createDisabledSubmitButton(false);
  }
};

export {getData, submitForm};
