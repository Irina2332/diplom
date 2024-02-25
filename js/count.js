const count = document.querySelector(".count");
const value = count.querySelector(".value");
const minusBtn = count.querySelector(".minus");
const plusBtn = count.querySelector(".plus");
const basketBtn = document.querySelector(".bi-basket");
const heartBtn = document.querySelector(".bi-heart");

minusBtn.addEventListener("click", function () {
  if (value.value > 1) {
    value.value = parseInt(value.value) - 1;
  }
});

plusBtn.addEventListener("click", function () {
  value.value = parseInt(value.value) + 1;
});

basketBtn.addEventListener("click", function () {
  // Действия при нажатии на кнопку корзины
});

heartBtn.addEventListener("click", function () {
  // Действия при нажатии на кнопку сердца
});
