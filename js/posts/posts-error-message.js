const TIMER_REMOVE_MESSAGE = 5000;

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const createServerErrorMessage = () => {
  const newErrorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(newErrorMessage);

  setTimeout(() => newErrorMessage.remove(), TIMER_REMOVE_MESSAGE);
};

export {createServerErrorMessage};
