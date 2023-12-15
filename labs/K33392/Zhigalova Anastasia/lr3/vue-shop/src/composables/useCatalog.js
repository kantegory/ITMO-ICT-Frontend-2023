/* eslint-disable no-undef */
import { ref, computed } from 'vue';

export function useCatalog() {
  const items = ref([]);
  const selectedCategory = ref('');
  const searchKeyword = ref('');

  const fetchItems = () => {
    fetch('http://localhost:8090/api/collections/catalog/records')
      .then(response => response.json())
      .then(data => {
        items.value = data.items;
      })
      .catch(error => console.error(error));
  };

  const filteredItems = computed(() => {
    return items.value.filter(item => {
      return (selectedCategory.value === '' || item.cardName.includes(selectedCategory.value)) &&
             item.title.toLowerCase().includes(searchKeyword.value.toLowerCase());
    });
  });

  const addToCart = (item) => {
    fetch('http://localhost:8090/api/collections/cart/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Товар добавлен в корзину");
    })
    .catch(error => console.error(error));
  };

  return { items, selectedCategory, searchKeyword, fetchItems, filteredItems, addToCart };
}