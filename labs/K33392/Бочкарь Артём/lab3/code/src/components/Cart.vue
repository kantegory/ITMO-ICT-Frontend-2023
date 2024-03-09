<script setup>
import { inject } from "vue";

import CartItemList from './CartItemList.vue';
import InfoBlock from "./InfoBlock.vue";

const { closeCart } = inject('cart');
const emit = defineEmits(['createOrder'])

defineProps({
    totalPrice: Number
})
</script>

<template>
    <div class="shadow"></div> 
    <div class="cart-box">
    
        <div class="cart-titile">
        <svg 
            @click="closeCart"
            class="previous-arrow"
            width="16" 
            height="14" 
            viewBox="0 0 16 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M1 7H14.7143" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                />
            <path 
            d="M8.71436 1L14.7144 7L8.71436 13" 
            stroke="black" 
            stroke-width="2" 
            stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
        <h2>Корзина</h2>
        </div>

    <div v-if="!totalPrice" class="empty-cart">
        <InfoBlock 
        title="Корзина пустая" 
        description="Добавьте хотя бы один костюм, чтобы сделать заказ."
        />
    </div>

    <CartItemList v-if="totalPrice"/>

    <div v-if="totalPrice">
        <div class="result">
        <span>Итого:</span>
        <div class="border"></div>
        <b>{{ totalPrice }} ₽</b>
    </div>

    <button 
        :disabled="totalPrice ? false : true" 
        @click="() => emit('createOrder')"
         class="button"
         >Оформить заказ
    </button>
    </div>
    </div>
</template>

<style scoped>
.cart-titile {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

.previous-arrow{
    opacity: 0.3;
    cursor: pointer;
    transform: rotate(180deg);
    &:hover {
        opacity: 1;
    }
}

.shadow {
    position: fixed; 
    top: 0; 
    left: 0; 
    height: 100vh; 
    width: 100vw; 
    background-color: black; 
    z-index: 4; 
    opacity: 0.7;
}

.cart-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;
    background-color: white;
    z-index: 5;
    padding: 20px;
}

.empty-cart {
    display: flex;
    height: 80%;
    align-items: center;
}

.result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.border {
    border-bottom: 1px dashed;
    width: 60%;
    margin-top: 10px;
}

.button {
    margin-top: 20px;
    transition: background-color;
    background-color: #333;
    width: 100%;
    border-radius: 1rem;
    padding: 1.2rem 0;
    color: white;
    cursor: pointer;
}

.button:hover {
  background-color: gray;
}

.button:disabled {
    background-color: lightgrey;
}

</style>