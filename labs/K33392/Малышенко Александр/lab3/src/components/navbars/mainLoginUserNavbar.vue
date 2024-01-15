<script>
import ModalCreateCapsule from "@/components/modalCreateCapsule.vue";
import capsulesStore from "@/stores/capsules.js";

export default {
  name: 'mainLoginUserNavbar',
  components: {ModalCreateCapsule},
  data() {
    return {
      searchString: "",
      capsulesState: capsulesStore(),
    }
  },

  computed: {
    updateCapsules(){
      this.capsulesState.loadCapsules(this.searchString)
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Time capsules</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/timeCapsules">Home</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal"
                    data-bs-target="#createCapsuleModal">
              Create capsule
            </button>
          </li>
        </ul>
        <form class="d-flex border-end border-2 me-2" role="search">
          <input class="form-control me-1" type="search" placeholder="Search"
                 aria-label="Search" @input="updateCapsules" id="searchString" v-model="searchString">
          <button class="btn btn-my-lightgreen-outline me-2" type="button" @click="updateCapsules">Search</button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1" onclick="location.href='/timeCapsules/profile';">
              Account
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <modal-create-capsule/>
</template>