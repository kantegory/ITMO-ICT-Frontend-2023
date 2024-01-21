<script setup>
import {useFetchServices} from "@/composables/useFetchServices";

if (localStorage.searchString !== "") {
  useFetchServices(localStorage.searchString);
} else {
  useFetchServices();
}
</script>

<template>
  <main id="cards" class="container-fluid row  text-start">
  </main>
</template>
<script>
export default {
  name: 'ServicesComponent'
}
</script>
