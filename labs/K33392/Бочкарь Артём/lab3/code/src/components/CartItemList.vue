<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';

const { cart, removeFromCart } = inject('cart')

</script>

<template>
    <div class="item-block">
        <CartItem 
        v-for="item in cart" 
        :key="item.id"
        :title="item.title"
        :price="item.price"
        @onClickRemove="() => removeFromCart(item)"
        />
    </div>
</template>

<style scoped>
.item-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>