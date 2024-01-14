<script setup>
import useApi from '@/composable/useApi'

const { currentName, orderApiPost } = useApi()
const CheckAuth = async (event) => {
  event.preventDefault()
  if (
    localStorage.getItem('accessToken') == null ||
    localStorage.getItem('accessToken') == 'undefined'
  ) {
    alert('Please SIGN IN')
  } else {
    event.preventDefault() 
    orderApiPost(event)
  }
}
</script>
<template>
  <div
    class="modal fade modal-order"
    id="modal-order"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit="CheckAuth">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Order</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
              id="closeOrderModal"
            ></button>
          </div>
          <div class="modal-body container-fluid">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Service</label>
              </div>
              <h4 style="padding-top: 3px; padding-left: 25px">{{ currentName }}</h4>
            </div>
            <div>Choose prefered date and type of communication</div>
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="startDate">Date</label>
              </div>
              <input id="startDate" class="form-control" type="date" />
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="comType">Type</label>
              </div>
              <select class="custom-select" id="comType">
                <option selected>Choose...</option>
                <option value="Instagram">Instagram</option>
                <option value="VK">VK</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-login" id="OrderButton">order</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-login {
  margin: auto;
  display: block;
  background-color: #02011e;
  color: #8738f8;
  width: 300px;
}
</style>
