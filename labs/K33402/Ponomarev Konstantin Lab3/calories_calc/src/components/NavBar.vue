<script setup>
import {useRouter} from "vue-router";
import {useUserInfoStore} from "@/stores/userInfoStore";

const router = useRouter()
const userInfoStore = useUserInfoStore()

const logout = async () => {
  await userInfoStore.logout()
  await router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <svg class="icon d-inline-block align-text-top" fill="currentColor">
          <use xlink:href="src/svg/sprite.svg#calculatorIcon"/>
        </svg>
        Калькулятор калорий
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="!userInfoStore.userInfo">
            <a class="nav-link" aria-current="page" href="/login">Войти</a>
          </li>
          <li class="nav-item" v-if="!userInfoStore.userInfo">
            <a class="nav-link" aria-current="page" href="/registration">Зарегистрироваться</a>
          </li>
          <li class="nav-item" v-if="userInfoStore.userInfo">
            <a class="nav-link" aria-current="page" href="/search">Поиск еды</a>
          </li>
          <li class="nav-item dropdown" v-if="userInfoStore.userInfo">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Профиль
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="/calculatorParams">Настроить параметры калькулятора</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" @click="logout">Выйти</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>
