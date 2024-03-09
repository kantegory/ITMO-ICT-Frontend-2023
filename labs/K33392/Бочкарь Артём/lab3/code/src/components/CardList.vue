<script setup>
import Card from "./Card.vue"

defineProps({
  items: Array
})

const onClickAdd = () => {
  alert('Добавить!')
}

const emit = defineEmits(['addToCart'])
</script>

<template>
  <div class="products-wrapper">
            <Card 
            v-for="item in items"
            :key="item.id"
            :title="item.title" 
            :description="item.description" 
            :price="item.price" 
            :rent="item.rent"
            :onClickAdd="() => emit('addToCart', item)"
            :isAdded="item.isAdded"
            />
          </div>
</template>

<style scoped>
.home-product .products-wrapper {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

}
</style>