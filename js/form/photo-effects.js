const EFFECTS = {
  default: {
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
  if (!EFFECTS[target.value]) {
    target.value = 'default';
  }

  noUiSlider.create(sliderElement, {
    range: {
      min: EFFECTS[target.value].min,
      max: EFFECTS[target.value].max
    },
    start: EFFECTS[target.value].max,
    step: EFFECTS[target.value].step,
    connect: 'lower'
  });
};

const updateEffects = (target) => {
  if (!EFFECTS[target.value]) {
    target.value = 'default';
  }

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: EFFECTS[target.value].min,
      max: EFFECTS[target.value].max
    },
    start: EFFECTS[target.value].max,
    step: EFFECTS[target.value].step,
    connect: 'lower'
  });

  sliderElement.noUiSlider.off('update');
  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `${EFFECTS[target.value].name}(${effectValue.value}${EFFECTS[target.value].unit})`;
  });
};

const initSlider = (target) => {
  if (!sliderElement.noUiSlider) {
    createSlider(target);
  }

  setSliderState(target);
  updateEffects(target);
};

const onEffectsListChange = (evt) => {
  updateEffects(evt.target);
  setSliderState(evt.target);
};

export {onEffectsListChange, initSlider};
