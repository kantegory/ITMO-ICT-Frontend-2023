<script setup>

import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <base-layout>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Ваш прогресс</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">0/1000 ккал</h6>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
             aria-valuemax="100">
          <div class="progress-bar" style="width: 25%"></div>
        </div>
        <div class="row mt-3 justify-content-between">
          <div class="col">
            <div>Белки</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" style="width: 0%"></div>
            </div>
            <div>0/200 гр</div>
          </div>
          <div class="col">
            <div>Жиры</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" style="width: 0%"></div>
            </div>
            <div>0/200 гр</div>
          </div>
          <div class="col">
            <div>Углеводы</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" style="width: 0%"></div>
            </div>
            <div>0/200 гр</div>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<style scoped>

</style>
