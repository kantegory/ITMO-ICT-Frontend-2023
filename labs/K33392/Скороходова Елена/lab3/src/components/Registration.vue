<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="registration container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <form class="registration-form col-6" @submit.prevent="registerUser">
          <h4 class="registration-name text-center">Регистрация</h4>
          <div class="mb-3">
            <label for="email" class="form-label">Введите email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Введите пароль</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Подтвердите пароль</label>
            <input
              type="password"
              class="form-control"
              v-model="confirmPassword"
              id="confirmPassword"
              required
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="agreedCheckbox"
              v-model="agreed"
            />
            <label class="form-check-label" for="agreedCheckbox"
              >Я согласен с политикой конфиденциальности и с обработкой
              персональных данных</label
            >
          </div>
          <div class="but-subm d-flex align-items-center justify-content-center">
            <button
              type="submit"
              class="btn btn-primary col-4 d-flex align-items-center justify-content-center"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import useRegistration from '../composables/useRegistration';

export default {
  setup() {
    const {
      email,
      password,
      confirmPassword,
      agreed,
      registerUser,
    } = useRegistration();

    return {
      email,
      password,
      confirmPassword,
      agreed,
      registerUser,
    };
  },
};
</script>

<style scoped>
  /* Форма регистрации */

  main .registration-form {
    margin-top: 100px;
    margin-bottom: 198px;
  }

  main .registration-form .registration-name {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 28.475px */
    letter-spacing: 0.75px;
    margin-bottom: 40px;
  }

  main .registration-form .mb-3 {
    color:  var( --text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 15.946px */
  }

  main .registration-form .btn-primary {
    margin-top: 50px;
    background: #2d2d2d;
    padding: 19px 158px;
    border-radius: 0;
    border-color: #2d2d2d;
  }

  main .registration-form .btn-primary:hover {
    background: #a79797;
    border-color: #a79797;
  }

  main .registration-form .form-check-label {
    color: var( --text-color);

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 107.613%;
    /* 15.066px */
  }

</style>
