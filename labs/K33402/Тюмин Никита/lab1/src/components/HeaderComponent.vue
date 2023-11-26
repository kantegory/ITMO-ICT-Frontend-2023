<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color: #FAF0E6">Musec</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">

      <div class="collapse navbar-collapse" id="navbarScroll">

        <ul class="navbar-nav ms-auto d-flex flex-row">
          <li class="nav-item dropdown">

            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
            </a>

            <ul class="dropdown-menu dropdown-menu-end" style="background-color: #FAF0E6;">
              <li><a class="dropdown-item" href="/profile">Profile</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>