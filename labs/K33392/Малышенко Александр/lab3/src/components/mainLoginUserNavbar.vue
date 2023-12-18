<script>
  import ModalCreateCapsule from "@/components/modalCreateCapsule.vue";
  import capsulesStore from "@/stores/capsules.js";

  export default {
    name: 'mainLoginUserNavbar',
    components: {ModalCreateCapsule},
    data () {
      return {
        capsulesState: capsulesStore(),
      }
    },
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Time capsules</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/timeCapsules">Home</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal" data-bs-target="#createCapsuleModal">
              Create capsule
            </button>
          </li>
        </ul>
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

  <modal-create-capsule />
</template>