const EFFECTS = {
  none: {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.effect-level__value');

const setSliderState = (target) => {
  if (target.matches('#effect-none')) {
    effectLevel.classList.add('hidden');
    imagePreview.style.filter = '';
    return;
  }

  effectLevel.classList.remove('hidden');
};

const createSlider = (target) => {
  let currentValue = target.value;
  if (!EFFECTS[currentValue]) {
    currentValue = 'none';
  }

  noUiSlider.create(sliderElement, {
    range: {
      min: EFFECTS[currentValue].min,
      max: EFFECTS[currentValue].max
    },
    start: EFFECTS[currentValue].max,
    step: EFFECTS[currentValue].step,
    connect: 'lower'
  });

  sliderElement.noUiSlider.off('update');
  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `${EFFECTS[currentValue].name}(${effectValue.value}${EFFECTS[currentValue].unit})`;
  });
};

const updateEffects = (target) => {
  let currentValue = target.value;

  if (!EFFECTS[currentValue]) {
    currentValue = 'none';
  }

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: EFFECTS[currentValue].min,
      max: EFFECTS[currentValue].max
    },
    start: EFFECTS[currentValue].max,
    step: EFFECTS[currentValue].step,
    connect: 'lower'
  });

  sliderElement.noUiSlider.off('update');
  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `${EFFECTS[currentValue].name}(${effectValue.value}${EFFECTS[currentValue].unit})`;
  });
};

const initSlider = (target) => {
  if (!sliderElement.noUiSlider) {
    createSlider(target);
  }

  setSliderState(target);
};

const onEffectsListChange = (evt) => {
  updateEffects(evt.target);
  setSliderState(evt.target);
};

export {onEffectsListChange, initSlider};
