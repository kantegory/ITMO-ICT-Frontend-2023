import { ref } from 'vue';

export function useProductCards() {
  const productCards = ref([]);


  async function fetchProductData(productId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      const card = createProductCard(data);
      productCards.value.push(card);
  
      
      console.log('Я молодец!');
      console.log('Полученная карточка продукта:', card);
     
    } catch (error) {
      console.error(`Произошла ошибка при загрузке данных для продукта ${productId}:`, error);
    }
  }

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

  for (let i = 1; i <= 6; i++) {
    fetchProductData(i);

  }


  function sortByPriceDescending() {
    productCards.value.sort((card1, card2) => {
      const price1 = parseFloat(card1.querySelector('.card-text').textContent);
      const price2 = parseFloat(card2.querySelector('.card-text').textContent);
      return price2 - price1;
    });
  }

  function sortByPriceAscending() {
    productCards.value.sort((card1, card2) => {
      const price1 = parseFloat(card1.querySelector('.card-text').textContent);
      const price2 = parseFloat(card2.querySelector('.card-text').textContent);
      return price1 - price2;
    });
  }

  return {
    productCards,
    createProductCard,
    fetchProductData,
    sortByPriceDescending,
    sortByPriceAscending,
  };
}