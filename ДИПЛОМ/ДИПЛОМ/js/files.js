const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const previewImage = document.getElementById('previewImage');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  const fileType = file.type;
  const validExtensions = ['image/jpeg', 'image/png', 'application/pdf'];
  const validFileSize = 5 * 1024 * 1024; // 5MB

  if (validExtensions.includes(fileType) && file.size <= validFileSize) {
    const reader = new FileReader();
    reader.onload = function() {
      previewImage.src = reader.result;
    }
    reader.readAsDataURL(file);
    fileName.textContent = file.name;
  } else {
    alert('Пожалуйста, загрузите допустимый файл (jpeg, png, pdf) размером не более 5 МБ');
    fileInput.value = ''; // clear file input
    fileName.textContent = '';
    previewImage.src = '#';
  }
});