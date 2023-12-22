<template>
  <div class="card capsule-param">
    <div class="card-header">
      <img src="/src/assets/img/capPattern.jpg" alt="..." class="card-img-top">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text mb-2"> {{ description }}</p>
      <form onsubmit="" class="justify-f-e">
        <button type="submit" class="btn btn-my-card btn-block btn-sm" value="{{ id }}">Открыть</button>
      </form>
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

  .btn-my-card{
    --bs-btn-color: var(--color4);
    --bs-btn-bg: var(--color2);
    --bs-btn-border-color: var(--color3);
    --bs-btn-hover-color: var(--color4);
    --bs-btn-hover-bg: var(--color11);
    --bs-btn-hover-border-color: var(--color1);
    --bs-btn-active-color: var(--color4);
    --bs-btn-active-bg: var(--color11);
    --bs-btn-active-border-color: var(--color1);
  }
</style>

<script>

  export default {
    name: 'vaultOpened',
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
    methods: {
      getNormalDate(){
        const date = new Date(this.openDate)
        const dd = date.getDate();
        const mm = date.getMonth()
        const yyyy = date.getFullYear();
        let hh = date.getHours();
        let min = date.getMinutes();
        if(min < 10){
          min = '0'+min;
        }
        const strDate = dd + '.' + mm + '.' + yyyy + '  ' + hh + ':' + min;
        return strDate;
      }
    }

  }
</script>