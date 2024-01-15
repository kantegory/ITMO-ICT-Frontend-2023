<script>
import capsulesStore from "@/stores/capsules.js";

export default {
  name: 'mainRadioButtons',
  data(){
    return{
      capsulesState: capsulesStore(),
    }
  },
  computed: {
    updateCapsules(){
      this.capsulesState.loadCapsules();
    }
  },
}
</script>

<template>
  <div class="container mt-3">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input @click="updateCapsules" v-model="capsulesState.sorting" type="radio" class="btn-check" id="allCapsules" value="allCapsules">
      <label  class="btn btn-my-lightgreen-outline-v2" for="allCapsules">All capsules</label>

      <input @click="updateCapsules" v-model="capsulesState.sorting" type="radio" class="btn-check" id="myCapsules" value="myCapsules">
      <label class="btn btn-my-lightgreen-outline-v2" for="myCapsules">My capsules</label>

      <input  @click="updateCapsules" v-model="capsulesState.sorting" type="radio" class="btn-check" id="openedCapsules" value="openedCapsules">
      <label class="btn btn-my-lightgreen-outline-v2" for="openedCapsules">Opened</label>
    </div>
  </div>
</template>