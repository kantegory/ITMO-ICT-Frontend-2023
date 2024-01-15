function sortByPriceDescending(cards) {
  cards.sort((card1, card2) => {
    const price1 = parseFloat(card1.querySelector('.card-text').textContent);
    const price2 = parseFloat(card2.querySelector('.card-text').textContent);
    return price2 - price1;
  });
}

function sortByPriceAscending(cards) {
  cards.sort((card1, card2) => {
    const price1 = parseFloat(card1.querySelector('.card-text').textContent);
    const price2 = parseFloat(card2.querySelector('.card-text').textContent);
    return price1 - price2;
  });
}

// Массив карточек
const productCards = [];

// Функция создания карточки товара
function createProductCard(data) {
  const card = document.createElement("div");
  card.className = "col";
  card.classList.add("card", "h-100");

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = data.image;
  img.alt = data.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.title;

  const price = document.createElement("p");
  price.className = "card-text";
  price.textContent = data.price + " EUR";

  const description = document.createElement("p");
  description.className = "card-descript";
  description.textContent = data.description;

  // Генерация надписи для изображения
  const imageLabel = document.createElement("span");
  imageLabel.className = "sr-only visually-hidden";
  imageLabel.textContent = "Изображение товара: " + data.title;

  cardBody.appendChild(imageLabel);
  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(description);
  

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}



// Функция для загрузки данных и создания карточки
function fetchProductData(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => {
      const card = createProductCard(data);
      productCards.push(card);
      // Добавляем карточку на страницу
      document.getElementById("product-container").appendChild(card);
    })
    .catch(error => {
      console.error(`Произошла ошибка при загрузке данных для продукта ${productId}:`, error);
    });
}

//Загрузка начальных карточек
for (let i = 1; i <= 6; i++) {
  fetchProductData(i);
}

// Сортировка по цене по убыванию
document.getElementById("sortByPriceDescending").addEventListener("click", function () {
  sortByPriceDescending(productCards);
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // Очищаем контейнер
  productCards.forEach(card => {
    productContainer.appendChild(card); // Добавляем отсортированные карточки обратно на страницу
  });
});

// Сортировка по цене по возрастанию
document.getElementById("sortByPriceAscending").addEventListener("click", function () {
  sortByPriceAscending(productCards);
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  productCards.forEach(card => {
    productContainer.appendChild(card);
  });
});