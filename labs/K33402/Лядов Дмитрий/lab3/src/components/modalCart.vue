<script setup>
import useCart from '@/composable/useCart'

const { cartProducts, MakeOrder } = useCart()

// console.log('app.vue', cartProducts.value)
import cartList from './cartList.vue'
console.log()
</script>

<template>
  <div
    class="modal fade modal-cart"
    id="modal-cart"
    tabindex="-1"
    aria-labelledby="ModalCartLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalCartLabel">Cart</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
            id="cartClose"
          ></button>
        </div>
        <div class="modal-body">
          <h3>You wanna order:<br /></h3>
          <div class="container-fluid" id="cartContainer">
            <cartList :items="cartProducts" />
          </div>
        </div>

        <hr />
        <button class="btn btn-order" style="width: 70%" id="OrderButton" @click="MakeOrder">
          Order
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-order {
  margin: auto;
  height: 40px;
  display: block;
  background-color: #4a4a4a;
  color: white;
  width: 50%;
  margin-bottom: 15px;
}
.cart-img {
  width: 150px;
  height: 200px;
}
</style>
