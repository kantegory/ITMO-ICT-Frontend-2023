<script>
import usersStore from "@/stores/users.js";
import capsulesStore from "@/stores/capsules.js";

export default {
  name: 'modalLogin',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      login: !localStorage.accessToken,
      userState: usersStore(),
      capsulesState: capsulesStore()
    }
  },
  computed: {
    updateCapsules(){
      this.capsulesState.loadCapsules();
    }
  },
  methods: {
    async loginUser() {
      const response = (await this.userState.loginUser(this.form))
      if (response) {
        const {accessToken, user} = response
        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)
        this.login = !localStorage.accessToken
      }

      this.form.email = ''
      this.form.password = ''
      location.reload()
    },
  }
}
</script>

<template>
  <div class="modal fade" id="logInModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="logInForm" @submit.prevent="loginUser">
          <div class="modal-header change-bg-verylightgreen">
            <h1 class="modal-title fs-5" id="logInModalLabel">Log in</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="form-floating mb-3">
                <input type="email" class="form-control change-box-shadow-lightgreen" id="emailLogIn" name="email"
                       placeholder="name@example.com" v-model="form.email">
                <label for="emailReg">Email address</label>
              </div>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control change-box-shadow-lightgreen" id="floatingPasswordLogIn"
                     name="password" placeholder="Password" v-model="form.password">
              <label for="floatingPasswordLogIn">Password</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-my-lightgreen" data-bs-dismiss="modal" @click="reload">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
