<script>
  export default {
    name: 'profileNavbar',

    props: {
      username: {
        type: String,
        required: true
      }
    },

    methods: {
      logout(){
        localStorage.user = ''
        localStorage.accessToken = ''
      }
    }
  }
</script>

<template>
  <a class="navbar-brand" href="/timeCapsules">Time capsules</a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/timeCapsules">Home</a>
    </li>
  </ul>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header change-bg-verylightgreen">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{{username}}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/timeCapsules">My capsules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/timeCapsules" @click="logout">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</template>