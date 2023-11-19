const HASHTAGS_COUNT = 5;
const DESCRIPTION_LENGTH = 140;
const HASHTAG_REGULAR_EXPRESSION = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_VALIDATE_HASHTAGS = 'введён невалидный хэш-тег';
const ERROR_NUMBER_HASHTAGS = 'превышено количество хэш-тегов';
const ERROR_REPEAT_HASHTAGS = 'хэш-теги повторяются';
const ERROR_COMMENTS_LENGTH = `длина комментария больше ${ DESCRIPTION_LENGTH } символов`;

const uploadForm = document.querySelector('.img-upload__form');
const descriptionInput = document.querySelector('.text__description');
const hashtagsInput = document.querySelector('.text__hashtags');

let hashtagsArray = [];

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const isValidateHashtags = () => {
  hashtagsArray = hashtagsInput.value.toLowerCase().trim().split(' ');
  return hashtagsArray.filter((hashtag) => hashtag).every((hashtag) => HASHTAG_REGULAR_EXPRESSION.test(hashtag));
};

const isValidateNumberHashtags = () => hashtagsArray.length <= HASHTAGS_COUNT;

const isValidateRepeatHashtags = () => new Set(hashtagsArray).size === hashtagsArray.length;

const isValidateDescriptionLength = () => descriptionInput.value.length <= DESCRIPTION_LENGTH;

const renderErrorMessages = () => {
  pristine.addValidator(hashtagsInput, isValidateHashtags, ERROR_VALIDATE_HASHTAGS, 1, true);
  pristine.addValidator(hashtagsInput, isValidateNumberHashtags, ERROR_NUMBER_HASHTAGS, 1, true);
  pristine.addValidator(hashtagsInput, isValidateRepeatHashtags, ERROR_REPEAT_HASHTAGS, 1, true);
  pristine.addValidator(descriptionInput, isValidateDescriptionLength, ERROR_COMMENTS_LENGTH, 1, true);
};

const validatePristine = () => pristine.validate();
const resetPristine = () => pristine.reset();

export {validatePristine, resetPristine, renderErrorMessages};