<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="enter container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <form class="enter-form col-6">
          <h4 class="enter-name text-center">Вход</h4>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Адрес электронной почты</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          
          <div v-if="loginError" class="text-danger mb-3">
            Неверный логин или пароль
          </div>
          <div
            class="but-subm d-flex align-items-center justify-content-center"
          >
            <button
              type="submit"
              class="btn btn-primary col-4 d-flex align-items-center justify-content-center"
              @click.prevent="loginUser"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import useLogin from "@/composables/useLogin";

export default {
  setup() {
    const { email, password, loginError, loginUser } = useLogin();

    return {
      email,
      password,
      loginError,
      loginUser,
    };
  },
};
</script>

<style scoped>
/* Форма входа */

main .enter-form {
  margin-top: 100px;
  margin-bottom: 198px;
}

main .enter-form .enter-name {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 113.9%;
  letter-spacing: 0.75px;
  margin-bottom: 40px;
}

main .enter-form .mb-3 {
  color: var(--text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 113.9%;
}

main .enter-form .btn-primary {
  margin-top: 50px;
  background: #2d2d2d;
  padding: 19px 158px;
  border-radius: 0;
  border-color: #2d2d2d;
}

main .enter-form .btn-primary:hover {
  background: #a79797;
  border-color: #a79797;
}
</style>
