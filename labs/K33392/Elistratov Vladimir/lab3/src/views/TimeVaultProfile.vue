<template xmlns="http://www.w3.org/1999/html">
  <header class="rounded">
    <profile-header/>
  </header>
  <main class="rounded">
  <profile-info
      :userName="JSON.parse(this.usState.user)['username']"
      :firstName="JSON.parse(this.usState.user)['firstName']"
      :email="JSON.parse(this.usState.user)['email']"
      :capCount="JSON.parse(this.usState.user)['capCount']"
  />
  </main>

  <footer>
    <footer-c/>
  </footer>
</template>

<style scoped>

</style>

<script>
  import usersStore from "@/stores/user.js";
  import capsulesStore from "@/stores/capsules.js";
  import ProfileHeader from "@/components/Profile/Header/ProfileHeader.vue";
  import FooterC from "@/components/footerC.vue";
  import ProfileInfo from "@/components/Profile/info/profileInfo.vue";
  import VaultOpened from "@/components/Vaults/vaultOpened.vue";

  export default {
    name: "profilePage",
    data(){
      return{
        usState: usersStore(),
        capState: capsulesStore(),
      }
    },
    components: {
      VaultOpened,
      ProfileInfo,
      FooterC,
      ProfileHeader

    },

  };

</script>