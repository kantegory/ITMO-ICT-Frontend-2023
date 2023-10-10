<template>
  <div class="container">
    <div class="__music__section">
      <h2>Recently played</h2>

      <div class="row">
        <div
          v-for="i in [1,2,3,4,5,3,4,4,4,4,2,2]"
          class="col-12 col-xl-2 col-md-4"
        >
          <div class="__image_cover">
            <div class="__hover_content">
              <play-icon class="__play_icon"/>
            </div>
            <img
              src="@/assets/placeholders/image.png"
              class="card-img-top __image"
            >
          </div>
          <div class="__song_info">
            <div>
              <h5>song name</h5>
              <p>artist name</p>
            </div>
            <three-dots-icon class="__dots_icon"/>
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
.__music__section {
  margin-top: 60px;
}
.__image_cover {
  position: relative;
}
.__image_cover:hover .__hover_content {
  opacity: 60%;
}
.__hover_content {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s;
  cursor: pointer;
}
.__play_icon {
  position: relative;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
}
.__song_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.__song_info:hover .__dots_icon {
  opacity: 100%;
}
.__dots_icon {
  opacity: 0;
  transition: 0.3s;
}
</style>