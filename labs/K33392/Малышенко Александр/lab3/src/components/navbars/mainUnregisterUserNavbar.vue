<script>
import ModalRegistration from "@/components/auth/modalRegistration.vue";
import ModalLogin from "@/components/auth/modalLogin.vue";
import capsulesStore from "@/stores/capsules.js";

export default {
  name: 'mainUnregisterUserNavbar',
  components: {ModalLogin, ModalRegistration},

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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal"
                    data-bs-target="#createCapsuleModal" disabled>
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
            <button type="button" class="btn btn-my-lightgreen me-1" data-bs-target="#registerModal"
                    data-bs-toggle="modal">
              Register
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen-outline me-1" data-bs-target="#logInModal"
                    data-bs-toggle="modal">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <modal-registration/>
  <modal-login/>
</template>