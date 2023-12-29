<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.push({name: 'home'})" style="color: var(--header-color);cursor:pointer">Musec</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <input
        v-on:keyup.enter="goToSearchPage"
        v-model="search"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      >

      <div class="collapse navbar-collapse" id="navbarScroll">

        <ul class="navbar-nav ms-auto d-flex flex-row">
          <li class="nav-item dropdown">

            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
            </a>

            <ul class="dropdown-menu dropdown-menu-end" style="background-color: var(--header-color);">
              <li><a class="dropdown-item" @click="$router.push({name: 'profile'})">Profile</a></li>
              <li><a class="dropdown-item" href="#" @click.prevent="logout">Logout</a></li>
            </ul>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapStores} from "pinia";
import useAuthStore from "../pinia/auth";

export default {
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    goToSearchPage() {
      this.$router.push({ name: 'search', query: {q: this.search} })
    },
    logout() {
      this.authStore.logout()
    },
  }
}
</script>

<style scoped>

</style>