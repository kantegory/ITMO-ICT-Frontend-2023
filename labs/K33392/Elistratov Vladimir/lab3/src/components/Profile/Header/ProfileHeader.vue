<script>
  import RegModal from "@/components/auth/regModel.vue";
  import usersStore from "@/stores/user.js";
  import capsulesStore from "@/stores/capsules.js";

  export default {
    name: 'ProfileHeader',
    data(){
      return{
        usState: usersStore(),
      }
    },
    methods: {
      logout(){
        this.usState.$reset()
        localStorage.pinia_users = '';
        //console.log(this.usState.user)
        location.replace("/vaulttec")
      }
    },
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <h1>TimeVault</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav border-start border-2 ms-auto">
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-main" onclick="location.href='/vaulttec';">На главную</button>
          </li>
          <li class="nav-item ms-2 mb-1">
            <button type="button" class="btn btn-lg btn-my-logout" @click="logout">Выйти</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style>
.btn-my-logout {
  --bs-btn-color: var(--color4);
  --bs-btn-bg: var(--color2);
  --bs-btn-border-color: var(--color3);
  --bs-btn-hover-color: var(--color4);
  --bs-btn-hover-bg: var(--color12);
  --bs-btn-hover-border-color: var(--color12);
  --bs-btn-active-color: var(--color4);
  --bs-btn-active-bg: var(--color12);
  --bs-btn-active-border-color: var(--color12);
}
</style>