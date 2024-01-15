<template>
  <div class="container">

    <div class="row">
      <button class="col-1 __filters_item __filter_item_active">
        Songs
      </button>
      <button class="col-1 __filters_item">
        Playlists
      </button>
      <button class="col-1 __filters_item">
        Artists
      </button>
    </div>

    <h4 class="pt-5 pb-2">Songs</h4>

    <div class="row __last_listened">
      <div class="col-1 __last_listened_image_container">
        <img class="__last_listened_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9IMcNjbHiC2Jpzyv1lMQHvBAZRA7hIs4hw&usqp=CAU" alt="">
      </div>
      <div class="col-2">
        <h5>song name</h5>
        <p>Artist name</p>
      </div>
      <div class="col-2 offset-7 __button_container">
        <button>
          <thumb-up-icon/>
        </button>
        <button>
          <thumb-down-icon/>
        </button>
        <button>
          <three-dots-icon/>
        </button>
      </div>
    </div>

    <hr>

    <div class="row __last_listened">
      <div class="col-1 __last_listened_image_container">
        <img class="__last_listened_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9IMcNjbHiC2Jpzyv1lMQHvBAZRA7hIs4hw&usqp=CAU" alt="">
      </div>
      <div class="col-2">
        <h5>song name</h5>
        <p>Artist name</p>
      </div>
      <div class="col-2 offset-7 __button_container">
        <button>
          <thumb-up-icon/>
        </button>
        <button>
          <thumb-down-icon/>
        </button>
        <button>
          <three-dots-icon/>
        </button>
      </div>
    </div>

    <hr>

    <div class="row __last_listened">
      <div class="col-1 __last_listened_image_container">
        <img class="__last_listened_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9IMcNjbHiC2Jpzyv1lMQHvBAZRA7hIs4hw&usqp=CAU" alt="">
      </div>
      <div class="col-2">
        <h5>song name</h5>
        <p>Artist name</p>
      </div>
      <div class="col-2 offset-7 __button_container">
        <button>
          <thumb-up-icon/>
        </button>
        <button>
          <thumb-down-icon/>
        </button>
        <button>
          <three-dots-icon/>
        </button>
      </div>
    </div>

    <h4 class="pt-5 pb-3">Playlists</h4>

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
          <h5 class="mb-3">playlist name</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage"
}
</script>

<style scoped>
.__last_listened_image {
  max-height: 50px;
  margin: auto;
}
.__last_listened_image_container {
  display: flex;
  align-items: center;
  align-content: center;
}
.__button_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
hr {
  color: #FAF0E6;
  margin: 10px;
}
.__last_listened {
  max-height: 60px;
}
.__filters_item {
  background-color: #FAF0E6;
  border-radius: 15px;
  text-align: center;
  margin: 0 5px 0 5px;
}
.__filter_item_active {
  background-color: #B9B4C7;
}
</style>