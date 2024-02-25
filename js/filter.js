document.getElementById("sort").addEventListener("change", function () {
  let value = this.value;
  let items = document.querySelectorAll(".item");

  switch (value) {
    case "priceAsc":
      // Сортировка по цене по возрастанию
      break;
    case "priceDesc":
      // Сортировка по цене по убыванию
      break;
    case "nameAsc":
      // Сортировка по названию от A до Я
      break;
    case "nameDesc":
      // Сортировка по названию от Я до А
      break;
    case "newest":
      // Сортировка по новизне
      break;
    case "oldest":
      // Сортировка по старым элементам
      break;
    default:
      // Сортировка по умолчанию
      break;
  }
});
