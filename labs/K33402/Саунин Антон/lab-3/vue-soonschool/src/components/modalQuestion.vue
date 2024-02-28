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
            <h5 class="modal-title" id="exampleModalLabel">Confirm order</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
              id="closeOrder"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
            style="height: 200px"
          >
            <h3 style="text-align: center; color: black">
              Are you sure you wanna add<br /><br />
              <div id="addName" style="color: #077015"></div>
              <br />
              to cart for
              <span id="addPrice"></span>
            </h3>
          </div>
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
  background-color: #077015;
  color: #ffd700;
  width: 40%;
  margin-bottom: 15px;
}
.btn-order:hover {
  background-color: #288b56;
  color: #ffd700;
}
</style>
