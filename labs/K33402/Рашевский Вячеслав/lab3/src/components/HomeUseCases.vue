<script setup>
import {useFetchUseCases} from "@/composables/useFetchUseCases";

useFetchUseCases();
</script>

<template>
  <div class="card col-12 col-xl-5 col-md-6 my-5 mx-auto text-start">
    <h5 class="card-header">Key use cases</h5>
    <div class="card-body">
      <ul id="useCasesList" class="list-group">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeUseCases'
}
</script>