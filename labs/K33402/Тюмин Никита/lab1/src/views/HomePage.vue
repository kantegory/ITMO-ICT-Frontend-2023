<template>
  <div class="container">
    <div class="__music__section">
      <h2>Recently played</h2>

      <div class="row">
        <div
          v-for="i in [1,2,3,4,5,3,4,4,4,4,2,2]"
          class="col-12 col-xl-2 col-md-4 __song_card"
        >
          <img
            src="@/assets/placeholders/image.png"
            class="card-img-top __image"
          >
          <div>
            <h5>song name</h5>
            <p>artist name</p>
          </div>
        </div>
      </div>
    </div>

    <div class="__music__section">
      <h2>Recently played</h2>

      <div class="row">
        <div
          v-for="i in [1,2,3,4,5,3,4,4,4,4,2,2]"
          class="col-12 col-xl-2 col-md-4"
        >
          <img
            src="@/assets/placeholders/image.png"
            class="card-img-top __image"
          >
          <div>
            <h5>song name</h5>
            <p>artist name</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style scoped>
.__image {
  width: 100%;
  object-fit: cover;
  /*border-radius: 30px;*/
}

.__music__section {
  margin-top: 60px;
}
</style>