document.addEventListener("DOMContentLoaded", function () {
  const cardProducts = document.querySelectorAll(".card-products");

  cardProducts.forEach(function (cardProduct) {
    const overlay = cardProduct.querySelector(".overlay");

    cardProduct.addEventListener("mouseenter", function () {
      overlay.style.display = "flex"; // Плавно отображаем блок
    });

    cardProduct.addEventListener("mouseleave", function () {
      overlay.style.display = "none"; // Плавно скрываем блок
    });
  });
});
