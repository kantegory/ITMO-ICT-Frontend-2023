<template>
  <div class="modal fade modal-my-config" id="regFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="regFormModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Регистрация</h5>
          <button type="button" class="btn btn-my-main" data-bs-dismiss="modal" aria-label="Закрыть">
<<<<<<< Updated upstream
            <svg class="close-btn">
              <use xlink:href=""></use>
=======
            <svg id="close" class="close-btn"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
>>>>>>> Stashed changes
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <form id="RegistrationForm" @submit.prevent="registration">
            <div class="form-outline mb-4">
              <label class="form-label" for="registerUsername" >Логин</label>
              <input type="text" v-model="form.username" id="registerUsername" class="form-control" name="userName" aria-labelledby="Введите свое Имя"/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="registerPassword">Пароль</label>
              <input type="password" v-model="form.password" id="registerPassword" class="form-control" name="password"/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="registerEmail">Email</label>
              <input type="email" v-model="form.email" id="registerEmail" class="form-control" name="email"/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="registerName">Имя</label>
              <input type="text" v-model="form.firstname" id="registerName" class="form-control" name="firstName"/>
            </div>

            <button type="submit" class="btn btn-my-main btn-block mb-3" data-bs-dismiss="modal">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from "pinia";
  import usersStore from "@/stores/user.js";

  export default {
    name: 'regModal',
    data() {
      return {
        form: {
          firstname: '',
          username: '',
          email: '',
          password: '',
          capCount: 0,
        },
        usState: usersStore(),
      };
    },
    computed: {
    },
    methods: {
      async registration() {
        const resp = (await this.usState.createUser(this.form));
        await this.formReset();
      },
      async formReset() {
        this.form.password = ''
        this.form.email = ''
        this.form.firstname = ''
        this.form.username = ''
      }
    },
  }
</script>

<style scoped>
.modal-my-config{
  --bs-modal-bg: var(--color3);
  --bs-modal-color: var(--color4);
  --bs-modal-border-color: var(--color1);
  --bs-modal-header-border-color: var(--color1);
  --bs-modal-footer-border-color: var(--color1);
}

.modal-my-config-light{
  --bs-modal-bg: var(--color1);
  --bs-modal-color: var(--color4);
  --bs-modal-border-color: var(--color3);
  --bs-modal-header-border-color: var(--color3);
  --bs-modal-footer-border-color: var(--color3);
}
</style>