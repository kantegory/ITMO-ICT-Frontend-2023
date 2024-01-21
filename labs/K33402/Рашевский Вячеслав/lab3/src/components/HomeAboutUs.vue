<script setup>
import {useFetchAbout} from "@/composables/useFetchAbout";

useFetchAbout();
</script>

<template>
  <div class="card col-12 col-xl-5 col-md-6 my-5 mx-auto m-lg-0 text-start">
    <h5 class="card-header">About us</h5>
    <div class="card-body">
      <h5 id="aboutTitle" class="card-title"></h5>
      <p id="aboutDesc" class="card-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>