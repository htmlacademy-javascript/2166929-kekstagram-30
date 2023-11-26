const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

const uploadInput = document.querySelector('.img-upload__input');
const uploadImage = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((type) => fileName.endsWith(type));
};

const uploadPhoto = () => {
  const file = uploadInput.files[0];

  if (file && isValidType(file)) {
    uploadImage.src = URL.createObjectURL(file);
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${uploadImage.src})`;
    });
  }
};

const resetUploadPhoto = () => {
  uploadImage.src = 'img/upload-default-image.jpg';
  effectsPreview.forEach((item) => {
    item.style.backgroundImage = `url(${uploadImage.src})`;
  });
};

export {uploadPhoto, resetUploadPhoto};
