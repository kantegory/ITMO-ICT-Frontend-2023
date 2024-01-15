<template>
  <div class="card capsule-param">
    <div class="card-header">
      <img src="/src/assets/img/capPattern.jpg" alt="..." class="card-img-top">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text mb-2"> {{ description }}</p>
    </div>
    <div class="card-footer justify-s-b">
      <p>{{ getNormalDate() }}</p>
      <p>@{{ creator }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card-footer{
    font-size: small;
    height: 35px;
  }

  .card-header{
    max-height: 170px;
    display: flex;
    align-items: center;
  }

  .card-img-top{
    max-height: 170px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-text{
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-body{
    padding: 9px;
    max-height: 255px;
  }

  .capsule-param{
    background-color: var(--color1);
    color: var(--color4);
    max-height: 460px;
  }

</style>

<script>
  import {useDate} from "@/composables/date.js";

  export default {
    name: 'vaultClosed',
    props: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      openDate: {
        type: Date,
      },
      creator: {
        type: String,
      },
    },
    methods:{
      getNormalDate(){
        return useDate(this.openDate)
      }
    }

  }
</script>