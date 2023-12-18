<script>
  import ModalRegistration from "@/components/modalRegistration.vue";
  import ModalLogin from "@/components/modalLogin.vue";

  export default {
    name: 'mainUnregisterUserNavbar',
    components: {ModalLogin, ModalRegistration},
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal" data-bs-target="#createCapsuleModal" disabled>
              Create capsule
            </button>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen me-1" data-bs-target="#registerModal" data-bs-toggle="modal">
              Register
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-my-lightgreen-outline me-1" data-bs-target="#logInModal" data-bs-toggle="modal">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <modal-registration />
  <modal-login />
</template>