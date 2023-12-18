<template>
  <div class="btn-group" role="group">
    <input class="btn-check me-1" type="radio" v-on="reloadCapsules" v-model="capsuleState.selector" value="All" id="RadioBtnAll" tabindex="0"/>
    <label class="btn btn-my-main" for="RadioBtnAll" > Все </label>

    <input class="btn-check me-1" type="radio" v-on="reloadCapsules" v-model="capsuleState.selector" value="opened" id="RadioBtnOpened" tabindex="0"/>
    <label class="btn btn-my-main" for="RadioBtnOpened" > Открытые </label>

    <input class="btn-check me-1" type="radio" v-on="reloadCapsules" v-model="capsuleState.selector" value="closed" id="RadioBtnClosed" tabindex="0"/>
    <label class="btn btn-my-main" for="RadioBtnClosed" > Закрытые </label>

    <input class="btn-check me-1" type="radio" v-on="reloadCapsules" v-model="capsuleState.selector" value="My" id="RadioBtnMy" tabindex="0"/>
    <label class="btn btn-my-main" for="RadioBtnMy" > Созданные мной </label>

    <input class="btn-check me-1" type="radio" v-on="reloadCapsules" v-model="capsuleState.selector" value="notMy" id="RadioBtnNM" tabindex="0"/>
    <label class="btn btn-my-main" for="RadioBtnNM" > Созданные не мной </label>
  </div>
</template>

<style scoped>

</style>

<script>
  import capsulesStore from "@/stores/capsules.js";

  export default {
    name: 'loggedSelector',
    data(){
      return {
        capsuleState: capsulesStore(),
      }
    },
    computed: {
      reloadCapsules(){
        this.capsuleState.loadCapsules();
      }
    },
    mounted() {
    }
  }

</script>