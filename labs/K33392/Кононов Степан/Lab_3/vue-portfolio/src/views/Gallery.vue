<!-- Gallery.vue -->

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Портфолио</a>
      <form class="form-inline my-2 my-lg-0">
        <input id="searchInput" class="form-control mr-2 mr-sm-2" type="search" placeholder="Поиск..." v-model="searchQuery"
               @input="searchGallery">
      </form>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile">Профиль</router-link>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <img src="" alt="Фото профиля" class="img-fluid rounded-circle"
             style="width: 40px; height: 40px; margin-right: 10px;" id="avatar-small" @click="toggleDropdown" width="40"
             height="40">

        <ul class="dropdown-menu" v-show="isDropdownOpen">
          <li><a class="dropdown-item" @click="logout">Выйти</a></li>
        </ul>
      </div>
    </nav>


    <div class="container mt-5">
      <div class="row" id="gallery">
        <div class="col-md-4 mb-3" v-for="(image, index) in filteredGallery" :key="index">
          <div class="card" style="cursor: pointer;" @click="openModal(image.imageFile)">
            <img :src="image.imageFile" :alt="image.imageTitle" class="card-img-top image-clickable"
                 data-bs-toggle="modal" data-bs-target="#imageModal">
            <div class="card-body">
              <h5 class="card-title">{{ image.imageTitle }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно для увеличения изображения -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalLabel">Увеличенное изображение</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="selectedImage" alt="Увеличенное изображение" class="modal-image">
          </div>
        </div>
      </div>
    </div>
  </div>

  <theme-switcher></theme-switcher>

</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {ThemeSwitcher},
  data() {
    return {
      galleryData: [],
      selectedImage: "",
      searchQuery: "",
    };
  },
  mounted() {
    this.initializeUserStatus();
    this.loadGallery();
    this.fillUserInfo();
  },
  computed: {
    filteredGallery() {
      // Фильтрация изображений по заголовку на клиенте
      return this.galleryData.filter(image => image.imageTitle.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    getUserId() {
      const userData = localStorage.user ? JSON.parse(localStorage.user) : null;
      return userData ? userData.id : null;
    },
    openModal(imageFile) {
      this.selectedImage = imageFile;
    },
    initializeUserStatus() {
      const userData = localStorage.user ? JSON.parse(localStorage.user) : null;
      if (userData) {
        const avatarSmall = document.getElementById('avatar-small');
        avatarSmall.src = `https://avatar.iran.liara.run/public/${userData.avatar}`;
      }
    },
    redirectToProfile() {
      // ваш код для переадресации на профиль
    },
    async loadGallery() {
      const url = `http://localhost:3000/664/images`;

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.accessToken}`
        }
      });
      const responseJson = await response.json();

      this.galleryData = responseJson.map(image => ({
        id: image.id,
        imageFile: image.imageFile,
        imageTitle: image.imageTitle,
      }));
    },
    fillUserInfo() {
      // ваш код для заполнения информации о пользователе
    },
    searchGallery() {
      // Поиск осуществляется на клиенте, поэтому нет необходимости делать дополнительный запрос на сервер
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 32px;
  overflow: hidden;
}

.card-img-top {
  object-fit: cover;
  object-position: center top;
  height: 200px;
  transition: transform 0.3s;
}

.card:hover .card-img-top {
  transform: scale(1.1);
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
