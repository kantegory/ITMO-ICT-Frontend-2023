<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-2">
        <img class="__profile_image" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt=""/>
      </div>
      <div class="col-4">
        <h2>Firstname Lastname</h2>
      </div>
    </div>

    <h4 class="pt-5 pb-2">Last listened to</h4>

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

    <h4 class="pt-5 pb-3">My playlists</h4>

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
  name: "ProfilePage"
}
</script>

<style scoped>
.__profile_image {
  padding:0;
  height: 130px;
  width:130px;
  border-radius: 50%;
}
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
</style>