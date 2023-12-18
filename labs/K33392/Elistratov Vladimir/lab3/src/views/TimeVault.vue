<template>
  <header class="rounded">
    <div class="row justify-s-a" v-if="checkLogin">
      <logged-main-header/>
    </div>
    <div v-else class="row justify-s-a">
      <main-header/>
    </div>

  </header>
  <main class="rounded">
    <div class="container">
      <div class="row justify-c" v-if="checkLogin">
        <logged-selector/>
      </div>
      <div v-else class="row justify-c">
        <selector/>
      </div>
      <hr class="content-dividing-line rounded mt-3 mb-5"/>
      <div id="vaultList" class="row">
        <div class="col-xl-3 col-md-4 col-sm-6 mb-3" v-for="capsule in this.capState.capsules" :key="capsule.id">
          <div v-if="getCapsuleStatus(capsule.openDate)">
            <vault-opened
                :id="capsule.id"
                :name="capsule.name"
                :description="capsule.description"
                :creator="capsule.userName"
                :open-date="new Date(capsule.openDate)"
            />
          </div>
          <div v-else>
            <vault-closed
                :id="capsule.id"
                :name="capsule.name"
                :description="capsule.description"
                :creator="capsule.userName"
                :open-date="new Date(capsule.openDate)"
            />
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <footer-c/>
  </footer>
  <reg-modal/>
  <login-modal/>
  <vault-creation-modal/>

</template>

<style scoped>

</style>

<script>
  import MainHeader from "@/components/Main/Header/mainHeader.vue";
  import capsulesStore from "@/stores/capsules.js";
  import {mapActions, mapGetters, mapState} from "pinia";
  import RegModal from "@/components/auth/regModel.vue";
  import LoginModal from "@/components/auth/loginModel.vue";
  import LoggedSelector from "@/components/Main/Selector/loggedSelector.vue";
  import Selector from "@/components/Main/Selector/selector.vue";
  import usersStore from "@/stores/user.js";
  import LoggedMainHeader from "@/components/Main/Header/loggedHeader.vue";
  import VaultCreationModal from "@/components/Vaults/creationCapsuleModal.vue";
  import VaultOpened from "@/components/Vaults/vaultOpened.vue";
  import VaultClosed from "@/components/Vaults/vaultClosed.vue";
  import FooterC from "@/components/footerC.vue";

  export default {
    name: "homaPage",
    data(){
      return{
        usState: usersStore(),
        capState: capsulesStore(),
      }
    },
    components: {
      FooterC,
      VaultCreationModal, LoggedMainHeader, LoggedSelector, LoginModal, RegModal, Selector, MainHeader, VaultClosed, VaultOpened,},
    computed: {
      //...mapState(capsulesStore, ['capsules']),
      //...mapGetters(usersStore, ['token']),
      checkLogin(){
        //console.log(this.usState.authCheck, this.usState.token)
        return this.usState.authCheck
      }
    },
    methods: {
      getCapsuleStatus(date){
        if(((new Date(date)).getTime() <= (new Date()).getTime())){
          return true;
        }
        else{
          return false;
        }
      }

    },

    mounted() {
      this.capState.loadCapsules()
    },
  };

</script>