<script setup>
const CheckAuth = async (event) => {
  event.preventDefault()
  if (
    localStorage.getItem('accessToken') == null ||
    localStorage.getItem('accessToken') == 'undefined'
  ) {
    alert('Please SIGN IN')
  } else {
    console.log(localStorage.getItem('accessToken'))
    event.preventDefault()
    order(event)
  }
}
const order = async (event) => {
  event.preventDefault()
  // alert("ok")
  const Head = document.getElementById('inputGroupSelect01').value
  const date = document.getElementById('startDate').value
  const type = document.getElementById('comType').value
  var user = localStorage.getItem('user')
  var profileUsername = JSON.parse(user).id
  console.log(profileUsername)
  await fetch('http://localhost:3000/orders', {
    method: 'POST',
    body: JSON.stringify({
      Head: Head,
      date: date,
      type: type,
      username: profileUsername
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  alert('Ordered!')
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
            ></button>
          </div>
          <div class="modal-body container-fluid">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Service</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="Website development">Website development</option>
                <option value="Corporate website">Corporate website</option>
                <option value="Fixed price website">Fixed price website</option>
                <option value="Web Design">Web Design</option>
                <option value="Mobile app design">Mobile app design</option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Tech SEO">Tech SEO</option>
                <option value="on-page SEO">On-page SEO</option>
                <option value="off-page SEO">Off-page SEO</option>
              </select>
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
