<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <!--<img src="images/logo.png" alt="Логотип компании" class="img-fluid" style="max-height: 50px;" width="50" height="50">-->
    <a class="navbar-brand" href="#">Портфолио</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/gallery">Главная</router-link>
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

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="row" id="full_avatar"></div>
        <img :src="userData.avatar" alt="Фото профиля" class="img-fluid rounded-circle mb-3" id="avatar-full"
             width="350" height="350">
        <h3 id="user-name">{{ userData.firstname }}</h3>
        <div class="color-fg-muted mt-2 d-flex flex-items-center" id="company-name-container"
             v-show="userData.company">
          <!--<svg class="icon">-->
          <!-- <use xlink:href="images/icons.svg#ic_company"></use>-->
          <!-- </svg>-->
          <p id="company-name">{{ userData.company }}</p>
        </div>
        <div class="color-fg-muted mt-2 d-flex flex-items-center" id="location-container" v-show="userData.location">
          <!--<svg class="icon">-->
          <!--     <use xlink:href="@/images/icons.svg#ic_location"></use>-->
          <!--  </svg>-->
          <p id="location">{{ userData.location }}</p>
        </div>
        <div id="edit-profile-form" style="display: none;">
          <form @submit.prevent="submitProfileForm">
            <div class="form-group">
              <label for="new-username">Новое имя пользователя:</label>
              <input v-model="newUsername" type="text" class="form-control" id="new-username" name="new-username">
            </div>
            <div class="color-fg-muted mt-2 d-flex flex-items-center" v-show="userData.company">
              <!--   <img src="images/ic_company.svg" style="max-width: 100px; height: auto;">-->
              <input class="ml-2 form-control flex-auto input-sm" placeholder="Company" aria-label="Company"
                     name="company" v-model="newCompany">
            </div>
            <div class="color-fg-muted mt-2 d-flex flex-items-center" v-show="userData.location">
              <!--   <img src="images/ic_location.svg" style="max-width: 100px; height: auto;">-->
              <input class="ml-2 form-control flex-auto input-sm" placeholder="Location" aria-label="Location"
                     name="location" v-model="newLocation">
            </div>
            <button type="submit" class="btn btn-success mt-3">Сохранить</button>
            <button type="button" class="btn btn-outline-secondary mt-3" @click="cancelEdit">Отменить</button>
          </form>
        </div>

      </div>

      <div class="col-md-8">
        <h2>Работы пользователя</h2>
        <div class="row">
          <div class="card" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#addImageModal">
            <div
                style=" border-radius: 32px; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="border-radius: 32px; max-width: 220px; text-align: center;">
                <img :src="ic_add" alt="Добавьте файлы" style="max-width: 100px" width="40" height="40">
                <div>Выберите файл или кликните здесь</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3" v-for="(image, index) in images" :key="index">
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


  <div class="modal fade" id="addImageModal" tabindex="-1" aria-labelledby="addImageModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addImageModalLabel">Добавить изображение</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form enctype="multipart/form-data" @submit.prevent ref="imageForm">
            <div class="mb-3">
              <label for="imageFile" class="form-label">Выберите файл изображения (jpg/png):</label>
              <input type="file" class="form-control" id="imageFile" name="imageFile" accept=".jpg, .jpeg, .png">
            </div>
            <div class="mb-3">
              <label for="imageTitle" class="form-label">Название изображения:</label>
              <input type="text" class="form-control" id="imageTitle" name="imageTitle">
            </div>
            <button @click="uploadImage" type="submit" class="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  </div>


  <theme-switcher></theme-switcher>
</template>

<script>
import ic_add from "@/images/ic_add.svg"
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {ThemeSwitcher},
  setup() {
    const getUserId = () => {
      // Получение идентификатора пользователя
      const userData = localStorage.user ? JSON.parse(localStorage.user) : null;
      return userData ? userData.id : null;
    };
    return {
      ic_add,
      getUserId
    };
  },
  data() {
    return {
      userData: {},
      images: [],
      selectedImage: "",
    };
  },
  getUserId() {
    // Получение идентификатора пользователя
    const userData = localStorage.user ? JSON.parse(localStorage.user) : null;
    return userData ? userData.id : null;
  },
  methods: {
    openModal(imageFile) {
      this.selectedImage = imageFile;
    },

    handleImageClick(imgSrc) {
      // Обработка клика по изображению
      const modalBody = $('#imageModal .modal-body');
      modalBody.empty();
      const img = `<img src="${imgSrc}" alt="Увеличенное изображение" class="modal-image">`;
      modalBody.append(img);
      $('#imageModal').modal('show');
    },
    async uploadImage(event) {
      const form = this.$refs.imageForm;
      const formData = new FormData(form);
      formData.append('userId', this.getUserId);
      try {
        const response = await fetch('http://localhost:3000/images', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Файл успешно загружен!');
          // Дополнительные действия при успешной загрузке
        } else {
          console.error('Ошибка загрузки файла:', response.statusText);
        }
        const responseJson = await response.json();
        console.log('uploadImage response', responseJson);
        // await loadImages();
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    },
    async loadImages() {
      const userId = this.getUserId();
      const url = `http://localhost:3000/664/images`;

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.accessToken}`
        }
      });
      const responseJson = await response.json();

      console.log('response', responseJson);

      // Очищаем массив изображений перед загрузкой новых
      this.images = [];

      const filteredImages = responseJson.filter(image => image.userId.toString() === userId.toString());
      console.log('response filteredImages', filteredImages);

      // Добавляем изображения в массив this.images
      for (const image of filteredImages) {
        this.images.push({
          id: image.id,
          imageFile: image.imageFile,
          imageTitle: image.imageTitle,
        });
      }
    },
    updateProfile(data) {
      // Обновление профиля
      const token = localStorage.accessToken;
      const userId = this.getUserId();

      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      };

      fetch(`http://localhost:3000/users/${userId}`, requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Ошибка при обновлении профиля');
            }
          })
          .then(data => {
            console.log('Профиль успешно обновлен:', data);

            const userData = localStorage.user ? JSON.parse(localStorage.user) : null;
            if (userData) {
              userData.firstname = data.firstname;
              userData.company = data.company;
              userData.location = data.location;
              localStorage.user = JSON.stringify(userData);
              this.fillUserInfo();
            }
          })
          .catch(error => {
            console.error('Ошибка при обновлении профиля:', error);
          });
    },
    fillUserInfo() {
      // Заполнение информации о пользователе
      const userData = localStorage.user ? JSON.parse(localStorage.user) : null;

      if (userData) {
        const avatarSmall = document.getElementById('avatar-small');
        const avatarFull = document.getElementById('avatar-full');
        const userName = document.getElementById('user-name');
        // const companyNameIcon = document.querySelector('#company-name-container svg');

        const companyName = document.getElementById('company-name');
        //    const locationIcon = document.querySelector('#location-container svg');

        const location = document.getElementById('location');

        //  avatarSmall.src = `https://avatar.iran.liara.run/public/${userData.avatar}`;
        avatarFull.src = `https://avatar.iran.liara.run/public/${userData.avatar}`;
        avatarSmall.src = `https://avatar.iran.liara.run/public/${userData.avatar}`
        userName.textContent = userData.firstname;

        //   companyNameIcon.style.display = userData.company ? 'block' : 'none';
        companyName.style.display = userData.company ? 'block' : 'none';

        //    locationIcon.style.display = userData.location ? 'block' : 'none';
        location.style.display = userData.location ? 'block' : 'none';

        companyName.textContent = userData.company;
        location.textContent = userData.location;
      }
    },
    toggleDropdown() {
      // Переключение выпадающего списка
      const dropdown = document.getElementById('avatar-dropdown');
      const avatar = document.getElementById('avatar-small');
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        document.querySelector('.dropdown').classList.remove('active');
      } else {
        dropdown.style.display = 'block';
        document.querySelector('.dropdown').classList.add('active');
      }
    },
    handleDocumentClick(event) {
      // Обработка клика вне выпадающего списка
      const dropdown = document.getElementById('avatar-dropdown');
      const avatar = document.getElementById('avatar-small');
      //if (event.target !== avatar && !avatar.contains(event.target) && event.target !== dropdown && !dropdown.contains(event.target)) {
      // //   dropdown.style.display = 'none';
      //   }
    },
    handleLogoutClick() {
      // Обработка клика на ссылку "Выйти"
      localStorage.clear();
      window.location.href = 'login.html';
    },
  },
  mounted() {
    // Инициализация данных при загрузке компонента
    this.fillUserInfo();
    this.loadImages();
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
  max-height: 80vh; /* Настройте высоту по вашему желанию */
  width: auto;
  height: auto;
  object-fit: contain; /* Измените на 'cover', если хотите, чтобы изображение заполняло контейнер */
}
</style>
