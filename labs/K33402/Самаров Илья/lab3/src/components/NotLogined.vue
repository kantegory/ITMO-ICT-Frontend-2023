<script setup>
import { inject } from 'vue'
const IsLogined = inject('IsLogined')
const login = async (event) => {
  event.preventDefault()
  let reload = true
  const inputs = Array.from(event.target.querySelectorAll('input'))
  const loginData = {}

  for (const input of inputs) {
    loginData[input.name] = input.value
  }

  console.log('login data', loginData)

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  const responseJson = await response.json()

  const { accessToken, user } = responseJson

  console.log('response', responseJson)
  if (responseJson == 'Cannot find user') {
    alert('User not found')
    reload = false
  } else {
    if (responseJson == 'Incorrect password') {
      alert('password is incorrect')
      reload = false
    }
  }
  if (reload) {
    reload = true
    localStorage.accessToken = accessToken
    localStorage.user = JSON.stringify(user)
    IsLogined.value = true
    location.reload()
  }
}
</script>
<template>
  <div class="nav-item ms-auto" style="padding-right: 100px">
    <a data-bs-toggle="modal" data-bs-target="#modal-reg" class="nav-links">
      <h3 class="nav-text">SIGN IN</h3>
    </a>

    <div
      class="modal fade modal-reg"
      id="modal-reg"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit="login">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid modal-login">
                <div class="row">
                  <div class="col-3 loginicon">
                    <img src="/login.png" width="60" height="60" />
                  </div>
                  <div class="col-9">
                    <input
                      type="email"
                      class="form-control"
                      id="usernameLogin"
                      placeholder="Username..."
                      name="email"
                      autocomplete="on"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 passwordicon">
                    <img src="/password.png" width="40" height="40" />
                  </div>
                  <div class="col-9">
                    <input
                      type="password"
                      autocomplete="on"
                      class="form-control"
                      id="passwordLogin"
                      name="password"
                      style="padding-top: 5px; margin: auto; margin-top: 10px"
                      placeholder="Password..."
                    />
                  </div>
                </div>

                <div class="row" style="padding-top: 15px">
                  <div class="col-6">
                    <h6 style="padding-left: 25px; white-space: nowrap">Dont have an account?</h6>
                  </div>
                  <div class="col-6">
                    <router-link to="/registration">
                      <h6 style="text-align: left; padding-left: 30px">Sign up</h6>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-login" id="loginButton">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-item {
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
}
.nav-links {
  text-decoration: none;
}

.nav-signin {
  box-sizing: border-box;
  margin: auto;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
  padding-left: 550px;
}

.nav-text {
  color: #8738f8;
}
.modal-text {
  align-items: flex-start;
}

.loginicon {
  margin: auto;
  padding-left: 25px;
}
.passwordicon {
  margin: auto;
  padding-left: 35px;
}
.btn-login {
  margin: auto;
  display: block;
  background-color: #02011e;
  color: #8738f8;
  width: 300px;
}
</style>
