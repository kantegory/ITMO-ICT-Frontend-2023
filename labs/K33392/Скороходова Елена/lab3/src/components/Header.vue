<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header">
    <div class="header container-fluid">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <nav class="navbar col-lg-5 col-1 navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Переключатель навигации"
            >
              <span class="navbar-toggler-icon">
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Новинки</a
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/catalog" class="nav-link">
                      Одежда
                    </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Аксессуары</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sale</a>
                </li>
              </ul>
            </div>
          </nav>

          <router-link class="logo col-lg-2 col-4 d-flex justify-content-lg-center" to="/main">
            <img src="@/assets/favicon.png" alt="favicon" />
          </router-link>
          <form
            class="col-lg-3 col-5 d-flex justify-content-end"
            name="search"
            action="#"
            method="GET"
          >
            <div class="d-flex align-items-center">
              <button class="d-flex justify-content-center align-items-center">
                
                <img src="@/assets/search.svg" alt="Поиск" />
                
              </button>
              <input type="text" name="search" placeholder="Поиск" />
            </div>
          </form>

          <div class="icons col-2 d-flex justify-content-end align-items-center">
            <button
              type="button"
              class="btn btn-primary filter"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <img src="@/assets/bag.svg" alt="Открыть корзину" class=side-icon-bag/>
            
            </button>

            <!-- Модальное окно -->
            <div
              class="modal fade"
              id="exampleModal"
              ref="modalRef"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              @hidden="onModalHidden"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="my-cart">Моя корзина</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Закрыть"
                    ></button>
                  </div>

                  <div class="modal-body d-flex">
                    <img src="@/assets/car-img.png" alt="Девушка в красном комбинезоне" class="order-photo col-5"/>
                    <div class="cart-content">
                      <h5>Хлопковая рубашка с вырезом на плече</h5>
                      <p><b>7 499 руб.</b></p>
                      <p>Размер: S</p>
                      <p>Количество: 1</p>
                      <p>Цвет: белый</p>
                      <button type="button" class="btn btn-primary">
                        Удалить
                      </button>
                    </div>
                  </div>
                  <div class="modal-footer d-flex justify-content-start">
                  <p>Стоимость товара(ов): ... руб.</p>
                  <router-link to="/order" class="btn btn-primary">
                    Перейти к оформлению
                  </router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="@/assets/person.svg" alt="Открыть меню входа и регистрации" class=side-icon-acc/>
                
              </button>

              <ul class="dropdown-menu">
                 <li>
                  <router-link class="dropdown-item" to="/enter">Вход</router-link>
                 </li>
                 <li>
                  <router-link class="dropdown-item" to="/registration">Регистрация</router-link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
 
};
</script>

<style scoped>
  header .header {
    padding-top: 20px;
  }

  header .navbar-expand-lg .navbar-nav {
    flex-direction: row;
    gap: 44px;
  }

  header .header nav a {
    color: var(--text-color);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-style: normal;
    line-height: 134.4%;
    text-decoration: none;
    transition: 0.5s all ease;
  }

  header .header nav a:hover {
    color: var(--hover-color);
  }

  header .header form > div {
    border-bottom: 1px solid var(--text-color);
    width: 100%;
  }

  header .header form > div input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
  }

  header .header form > div input::placeholder {
    color: var(--text-color);
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  header .navbar button:hover {
    border: none;
  }



  header .header form > div button {
    background: none;
    border: none;
    outline: none;
    padding: 0;
    width: 19px;
    height: 19px;
    margin-left: 8px;
    margin-right: 10px;
  }

  header .header .icons {
    gap: 4px;
    
  }



  header .header .icons a:hover {
    outline: auto;
    outline-color: var(--text-color);
    outline-offset: 5px;
  }



  header .header .btn {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
  }

  header .header .btn:hover {
    color: var(--hover-color);
    border: none;
    text-decoration: dashed;
  }

  header .header .carousel {
    width: 100%;
  }

  header .header .dropdown-menu{
    background-color: var(--bg-color);
  }

  header .header .dropdown-item{
    color: var(--text-color);
  }

  header .header .dropdown-item:hover {
    background-color: var(--hover-color);
  }

  header .header form > div input{
    background-color:var(--bg-color);
    color:  var(--text-color);
  }

  /* Модальное окно корзины */

  header .modal-content{
    background-color:var(--bg-color);
    color:  var(--text-color);
  }


  header .icons .modal-header .my-cart {
    color: var(--text-color);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 28.475px */
    margin-top: 50px;
    margin-bottom: 40px;
  }

  header .icons .modal-body {
    gap: 15px;
    margin-bottom: 311px;
  }

  header .modal-footer .btn-primary {
    border: 1px solid #cecece;
    border-radius: 0;
    padding: 19px 78px;
    margin-top: 20px;
  }

  header .modal-content .btn-primary{
    border: 1px solid;
  }

  header .modal-content .btn-primary:hover{
    border: 1px solid;
  }
  header .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  img.side-icon-bag\/ {
      width: 24px;
  }

  img.side-icon-acc\/ {
      width: 26px;
  }

  header {
      border-bottom: 1px solid #ccc;
    }

</style>
