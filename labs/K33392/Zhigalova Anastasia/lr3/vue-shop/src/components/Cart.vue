<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <h3 style="text-align: left;">В вашей корзине:</h3>
    <div class="row items-cards">
      <div v-for="item in items" :key="item.id" class="col-md-3">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" alt="Изображение товара">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">Цена: {{ item.price }} руб.</p>
            <button class="btn btn-primary " @click="removeFromCart(item.id)">Удалить из корзины</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-primary one">
  <router-link to="/catalog" class="btn">Вернуться в каталог</router-link>
</button>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      fetch('http://localhost:8090/api/collections/cart/records')
        .then(response => response.json())
        .then(data => {
          this.items = data.items;
        })
        .catch(error => console.error(error));
    },
    removeFromCart(id) {
      fetch(`http://localhost:8090/api/collections/cart/records/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        this.fetchCartItems(); 
      })
      .catch(error => console.error(error));
    }
  }
};
</script>

<style>


.one {
    margin-bottom: 30px;
    margin-left: 44%;
    font-size: 22px;
    color: var(--text-color);
    font-weight: bold;

}

</style>