<template>
  <div class="container card col-12 col-xl-5 col-md-6 my-5 mx-auto">
    <h5 class="card-header">What you can achieve using ours services?</h5>
    <div class="row row-cols-2 my-auto">
      <router-link to="/services/lighting" class="card">
        <h5 class="card-title text-center py-4 my-auto mx-auto">Lighting</h5>
      </router-link>
      <router-link to="/services/cctv" class="card">
        <h5 class="card-title text-center py-4 my-auto mx-auto">CCTV</h5>
      </router-link>
      <router-link to="/services/door_locks" class="card">
        <h5 class="card-title text-center py-4 my-auto mx-auto">Door locks</h5>
      </router-link>
      <router-link to="/services/temperature" class="card">
        <h5 class="card-title text-center py-4 my-auto mx-auto">Temperature</h5>
      </router-link>
    </div>

    <router-link to="/services" class="card text-center border py-2 my-auto fw-semibold">
      Check out all services
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeServices'
}
</script>
