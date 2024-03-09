<script setup>
  const emit = defineEmits(['openCart']);
</script>

<template>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class="logo-icon" src="../assets/img/logo.svg" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-content">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="#">Главная</a>

                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="true">
                    Каталог
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/suit.svg" alt=""></span>Костюмы</a></li>
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/jacket.svg" alt=""></span>Пиджаки</a>
                    </li>
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/pants.svg" alt=""></span>Брюки</a></li>
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/shirt.svg" alt=""></span>Рубашки</a></li>
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/shoes.svg" alt=""></span>Туфли</a></li>
                    <li><a class="dropdown-item" href="#"><span><img src="../assets/icons/tie.svg" alt=""></span>Аксессуары</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Скидки</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Прокат</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Отзывы</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Магазины</a>
                </li>
              </ul>
              <div class="menu-right d-flex">
                <div class="menu-contact">
                  <a href="tel:+79533458549">
                    <img class="phone-icon" src="../assets/icons/phone.svg" alt="">
                    <span>+7 (953) 345-85-49</span>
                  </a>
                </div>
                <div class="menu-user">
                  <button class="profile">
                    <img class="user-icon" src="../assets/icons/user.svg" alt="">
                  </button>
                  <a @click="() => emit('openCart')" class="cart">
                    <img class="cart-icon" src="../assets/icons/cart.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
</template>

<style scoped>
.logo-icon {
	width: 40px;
}

.phone-icon {
	width: 30px;
}

.user-icon {
	width: 30px;
}

.cart-icon {
	width: 30px;
}

header {
	background: #FFFFFF;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
}

.navbar-nav {
	margin-right: 80px;
  }
  
  .menu-right {
	margin-left: 80px;
  }

header .navbar-light .navbar-nav .nav-item.dropdown a {
	position: relative;
	z-index: 1;
}

header .navbar-light .navbar-nav .nav-item .nav-link {
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #333;
	padding: 0 22px;
}

header nav {
    height: 100px;
}

header .dropdown-menu {
    background: #FFFFFF;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    border: none;
	padding: 5px 0 0;
	margin: 0;
}

header .dropdown-toggle::after {
	display: none;
}

.menu-right {
	align-items: center;
}

.navbar-content {
	display: flex;
	justify-content: space-between;
  }
  
  @media (max-width: 992px) {
	.navbar-content {
	  flex-direction: column;
	}
  }

header .menu-right .menu-contact a {
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: #000;
	text-decoration: none;
}

header .menu-right .menu-contact img {
	margin-right: 10px;
}

header .menu-right .menu-user a, header .menu-right .menu-user button {
	margin-left: 30px;
}

header .menu-right .menu-user button {
	background: none;
	border: none;
	padding: 0;
}

.dropdown-item img {
    width: 20px;
}

.dropdown-item {
    font-size: 14px;
    line-height: 13px;
    color: #333;
    padding: 10px 20px 10px 26px;
    display: flex;
    align-items: center;
}

.dropdown-item span {
    margin-right: 8px;
    display: inline-block;
    text-align: center;
}

@media (max-width: 992px) {

.navbar-content .navbar-nav {
  margin-bottom: 15px;
}

.menu-right {
  margin-bottom: 15px;
}

.menu-contact {
  margin-right: 0;
  margin-bottom: 15px;
}

.menu-user {
  align-items: center;
}

.menu-user .profile, .menu-user .cart {
  margin: 0 10px;
}
}

@media (max-width: 576px) {
.logo-icon, .phone-icon, .user-icon, .cart-icon {
  width: 25px;
}
}
</style>