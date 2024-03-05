<script setup>
import useAuth from '@/composable/useAuth'
import modalLogin from './modalLogin.vue'
import modalReg from './modalReg.vue'
const { sign } = useAuth()
const makeFalse = () => {
  sign.value = false
  console.log(sign.value)
}
const makeTrue = () => {
  sign.value = true
  console.log(sign.value)
}
</script>
<template>
  <div
    class="modal fade"
    id="modal-login"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content" style="background-color: #141414">
        <div class="modal-header">
          <div class="modal-title container-fluid" id="exampleModalLabel">
            <div class="d-flex">
              <button @click="makeTrue" class="btnModal border-end">sign in</button>
              <button @click="makeFalse" class="btnModal">sign up</button>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
                id="closeAuth"
              ></button>
            </div>
          </div>
        </div>
        <div v-if="sign">
          <modalLogin />
        </div>
        <div v-else>
          <modalReg />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btnModal {
  border: none;
  /* text-align: center; */
  background-color: #141414;
  color: #00d400;
  font-size: 30px;
  width: 50%;
  white-space: nowrap;
}
.btnModal:hover {
  color: #046b04;
}
</style>
