import {getServerData, sendServerData} from './data.js';
import {createSortPosts} from '../posts/sort-posts.js';
import {createServerErrorMessage} from '../posts/posts-error-message.js';
import {createDisabledSubmitButton, closeModal} from '../form/upload-form.js';
import {createFormSuccessMessage, createFormErrorMessage} from '../form/form-error-and-success-messages.js';

const getData = async () => {
  try {
    const pictures = await getServerData();
    createSortPosts(pictures);
  } catch {
    createServerErrorMessage();
  }
};

const submitForm = async (formElement) => {
  try {
    createDisabledSubmitButton(true);
    await sendServerData(new FormData(formElement));
    closeModal();
    createFormSuccessMessage();
    createDisabledSubmitButton(false);
  } catch {
    createFormErrorMessage();
    createDisabledSubmitButton(false);
  }
};

export {getData, submitForm};
