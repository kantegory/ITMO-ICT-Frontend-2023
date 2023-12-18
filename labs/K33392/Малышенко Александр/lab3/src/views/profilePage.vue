<script>
  import {defineComponent} from "vue";
  import usersStore from "@/stores/users.js";
  import ProfileNavbar from "@/components/profileNavbar.vue";
  import ProfileInfo from "@/components/profileInfo.vue";

  export default defineComponent({
    name: "profilePage",
    components: {ProfileInfo, ProfileNavbar},

    data(){
      return{
        userState: usersStore()
      }
    },

    methods: {
      getUser(){
        return JSON.parse(localStorage.user)
      }
    },

    mounted() {
      this.userState.loadUsers()
    },
  })
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid" id="profileNavbar">
        <profile-navbar :username="getUser().username" />
      </div>
    </nav>
  </header>

  <main>
    <div class="container py-5 mt-5">
      <div class="row">
        <profile-info :address="getUser().address" :phone-number="getUser().phoneNumber" :email="getUser().email"
                      :full-name="getUser().fullUsername" :extra-info2="getUser().extraProfileInfo1"
                      :extra-info1="getUser().extraProfileInfo2" :username="getUser().username" />
      </div>
    </div>
  </main>
</template>
