const SCALE_STEP = 25;
const SCALE_MIN_COUNT = 25;
const SCALE_MAX_COUNT = 100;

const scaleControlInput = document.querySelector('.scale__control--value');
const scaleDecreaseButton = document.querySelector('.scale__control--smaller');
const scaleZoomButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

let inputValue = SCALE_MAX_COUNT;

const createScaleImage = () => {
  scaleControlInput.value = `${inputValue}%`;
  imagePreview.style.transform = `scale(${scaleControlInput.value})`;
};

const onScaleDecreaseButtonClick = () => {
  inputValue = Math.max(inputValue - SCALE_STEP, SCALE_MIN_COUNT);
  createScaleImage();
};

const onScaleZoomButtonClick = () => {
  inputValue = Math.min(inputValue + SCALE_STEP, SCALE_MAX_COUNT);
  createScaleImage();
};

const scaleImage = () => {
  scaleDecreaseButton.addEventListener('click', onScaleDecreaseButtonClick);
  scaleZoomButton.addEventListener('click', onScaleZoomButtonClick);
};

const resetScaleImage = () => {
  inputValue = SCALE_MAX_COUNT;
  createScaleImage();
};

export {scaleImage, resetScaleImage};
