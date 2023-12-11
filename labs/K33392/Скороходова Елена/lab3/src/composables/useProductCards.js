import { ref } from 'vue';

const productCards = ref([]);

export function useProductCards() {
  async function fetchProductData(productId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      const product = createProductObject(data);
      productCards.value.push(product);
    } catch (error) {
      console.error(`Произошла ошибка при загрузке данных для продукта ${productId}:`, error);
    }
  }

  function createProductObject(data) {
    return {
      id: data.id,
      image: data.image,
      title: data.title,
      price: data.price + " EUR",
      description: data.description,
    };
  }

  const fetchData = async () => {
    console.log('Привет');
    for (let i = 1; i <= 6; i++) {
      await fetchProductData(i);
    }
  };

  // Вызываем функцию fetchData при инициализации
  fetchData();

  function sortByPriceDescending() {
    productCards.value.sort((product1, product2) => {
      const price1 = parseFloat(product1.price);
      const price2 = parseFloat(product2.price);
      return price2 - price1;
    });
  }

  function sortByPriceAscending() {
    productCards.value.sort((product1, product2) => {
      const price1 = parseFloat(product1.price);
      const price2 = parseFloat(product2.price);
      return price1 - price2;
    });
  }

  return {
    productCards,
    fetchProductData,
    sortByPriceDescending,
    sortByPriceAscending,
  };
}