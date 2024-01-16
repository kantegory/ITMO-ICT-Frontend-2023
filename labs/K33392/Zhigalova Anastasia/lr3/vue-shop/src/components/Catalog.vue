<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="form-group group-margin">
      <label for="category">Категории:</label>
      <select class="form-control" id="category" v-model="selectedCategory" @change="filterCards">
        <option value="">Все</option>
        <option value="skirt">Юбка</option>
        <option value="shirt">Рубашка</option>
        <option value="jeans">Джинсы</option>
        <option value="dress">Платье</option>
        <option value="t-shirt">Футболка</option>
        <option value="cap">Кепка</option>
        <option value="blazer">Пиджак</option>
        <option value="sportssuit">Спортивный костюм</option>
        <option value="coat">Пальто</option>
        <option value="trousers">Брюки</option>
        <option value="sweater">Свитер</option>
        <option value="jacket">Куртка</option>
      </select>
    </div>

    <div class="form-group form-group-margin">
      <label for="keyword">Поиск:</label>
      <input type="text" class="form-control" id="keyword" v-model="searchKeyword" @input="searchCards">
    </div>


    <div class="row items-cards">
      <div v-for="item in filteredItems" :key="item.id" class="col-md-3">
        <div :class="item.cardName">
          <img :src="item.imageUrl" alt="Изображение товара">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">Цена: {{ item.price }} руб.</p>
            <a href="#" class="btn btn-primary" @click="addToCart(item)">Добавить в корзину</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCatalog } from "@/composables/useCatalog";
import { onMounted } from 'vue';

export default {
  setup() {
    const { items, selectedCategory, searchKeyword, fetchItems, filteredItems, addToCart } = useCatalog();

    // Вызов fetchItems при монтировании компонента
    onMounted(fetchItems);

    return { items, selectedCategory, searchKeyword, filteredItems, addToCart };
  }
};
</script>


<style>
.group-margin {
  margin-bottom: 20px;
  margin-top: 20px;
}
.form-group-margin{
  margin-bottom: 30px;
  margin-top: 20px;

}
.items-cards{
  margin-bottom: 50px;
}

</style>