<script setup>
// import { inject } from 'vue'
import useCart from '@/composable/useCart'

const { addToCart } = useCart()
// const addProduct = inject('addToCart')
function add(event) {
  event.preventDefault()
  const name = document.getElementById('addName').innerHTML
  addToCart(name)
  document.getElementById('closeOrder').click()
}
function closeCart(event) {
  event.preventDefault()
  document.getElementById('closeOrder').click()
}
</script>
<template>
  <div
    class="modal fade modal-order"
    id="modal-question"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form onsubmit="">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Order</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
              id="closeOrder"
            ></button>
          </div>
          <div class="modal-body container-fluid"></div>
          <h3 style="text-align: center; color: #4a4a4a">
            Do you want to add<br />
            <div id="addName" style="color: black"></div>
            to cart for
            <span id="addPrice"></span>
          </h3>

          <hr />
          <div class="d-flex">
            <button class="btn btn-order" id="OrderButton1" @click="add">Yes</button>
            <button class="btn btn-order" id="OrderButton2" @click="closeCart">No</button>
          </div>
        </form>
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
  width: 40%;
  margin-bottom: 15px;
}
.btn-order:hover {
  background-color: grey;
  color: white;
}
</style>
