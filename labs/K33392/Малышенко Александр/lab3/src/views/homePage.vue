<script>
import openedCapsuleCard from "@/components/capsules/openedCapsuleCard.vue"
import capsulesStore from "@/stores/capsules.js"
import MainUnregisterUserNavbar from "@/components/navbars/mainUnregisterUserNavbar.vue"
import MainRadioButtons from "@/components/mainRadioButtons.vue"
import usersStore from "@/stores/users.js";
import MainLoginUserNavbar from "@/components/navbars/mainLoginUserNavbar.vue";
import ClosedCapsuleCard from "@/components/capsules/closedCapsuleCard.vue";
import Modal from "@/components/capsules/modalCapsule.vue";
import CapsuleModal from "@/components/capsules/modalCapsule.vue";

export default {
  name: 'homePage',
  components: {
    CapsuleModal,
    Modal,
    ClosedCapsuleCard, MainLoginUserNavbar, MainRadioButtons, MainUnregisterUserNavbar, openedCapsuleCard
  },
  computed: {
    checkLogin() {
      return this.userState.checkAuth
    }
  },
  methods: {
    async createCard() {
      await this.capsulesState.createCapsule(this.form)
      await this.capsulesState.loadCapsules()
      this.$refs.capsuleForm.reset()
    },
    getCurrentDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      return today
    },
  },
  mounted() {
    this.capsulesState.loadCapsules()
  },

  data() {
    return {
      userState: usersStore(),
      capsulesState: capsulesStore(),
    }
  }
}
</script>

<template>
  <header>
    <div v-if="checkLogin">
      <main-login-user-navbar/>
    </div>
    <div v-else>
      <main-unregister-user-navbar/>
    </div>
  </header>

  <main>
    <main-radio-buttons/>

    <div class="container">
      <div class="row" id="capsules">
        <div class="col-12 col-xl-4 col-md-6 col-sm-6 mb-3 mb-sm-0 mt-3" v-for="capsule in this.capsulesState.capsules"
             :key="capsule.id">
          <div v-if="getCurrentDate() >= capsule.openingDate">
            <opened-capsule-card :id="capsule.id" :title="capsule.title" :main-text="capsule.text"
                                 :creator-name="capsule.creatorName" :creation-date="capsule.creationDate"
                                 :opening-date="capsule.openingDate"/>
          </div>
          <div v-else>
            <closed-capsule-card :id="capsule.id" :title="capsule.title" :main-text="capsule.text"
                                 :creator-name="capsule.creatorName" :creation-date="capsule.creationDate"
                                 :opening-date="capsule.openingDate"/>
          </div>
        </div>
      </div>
    </div>
  </main>

  <capsule-modal/>
</template>