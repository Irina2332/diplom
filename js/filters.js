document.getElementById("priceRange").addEventListener("input", function () {
  let priceValue = document.getElementById("priceRange").value;
  document.getElementById("priceValue").textContent = priceValue + " руб.";
  filterProducts(priceValue);
});

function filterProducts(price) {
  const productCards = document.querySelectorAll(".card-product");
  productCards.forEach((card) => {
    const cardPrice = parseInt(
      card.querySelector("p").textContent.replace(/\D/g, "")
    );
    if (cardPrice >= price) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
