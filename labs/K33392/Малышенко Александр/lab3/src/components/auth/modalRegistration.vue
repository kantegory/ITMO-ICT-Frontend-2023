<script>
import usersStore from "@/stores/users.js"

export default {
  name: 'modalRegistration',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        accountCreationDate: this.getCurrentDate(),
        friendsList: [],
        ownCapsulesList: [],
        fullUsername: '',
        phoneNumber: '',
        address: '',
        extraProfileInfo1: '',
        extraProfileInfo2: ''
      },
      userState: usersStore(),
    }
  },
  computed: {},
  methods: {
    async register() {
      const response = (await this.userState.createUser(this.form))
      if (response) {
        const {accessToken, user} = response
        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)
      }

      this.form.username = ''
      this.form.email = ''
      this.form.password = ''
    },

    getCurrentDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      today = dd + '.' + mm + '.' + yyyy;
      return today
    }
  }
}
</script>

<template>
  <div class="modal fade" id="registerModal" ref="registerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="regForm" ref="registrationForm" @submit.prevent="register">
          <div class="modal-header change-bg-verylightgreen">
            <h1 class="modal-title fs-5" id="registrationModalLabel">Registration</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text">@</span>
              <div class="form-floating">
                <input type="text" class="form-control change-box-shadow-lightgreen" id="usernameReg" name="username"
                       placeholder="Username" v-model="form.username">
                <label for="usernameReg">Username</label>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control change-box-shadow-lightgreen" id="emailReg" name="email"
                     placeholder="name@example.com" v-model="form.email">
              <label for="emailReg">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control change-box-shadow-lightgreen" id="passwordReg" name="password"
                     placeholder="Password" v-model="form.password">
              <label for="passwordReg">Password</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-my-lightgreen" data-bs-dismiss="modal">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>