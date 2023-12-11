<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="container-fluid">
      <div class="container">
        <div class="row justify-content-center justify-content-lg-between">
          <a href="#header" class="logo col-2 col-sm-4">
             <img src="@/assets/favicon.png" alt="favicon" />
          </a>

          <nav class="menu col-9 col-lg-8 d-flex justify-content-between">
            <ul>
              <li class="title">Помощь</li>
              <li><a href="#" class="d-block">Оплата</a></li>
              <li><a href="#" class="d-block">Доставка</a></li>
              <li><a href="#" class="d-block">Возврат и обмен</a></li>
            </ul>
            <ul>
              <li class="title">Компания</li>
              <li><a href="#" class="d-block">О нас</a></li>
              <li><a href="#" class="d-block">Наши магазины</a></li>
              <li><a href="#" class="d-block">Контакты</a></li>
            </ul>
            <ul>
              <li class="title">Следите за нами</li>
              <li><a href="#" class="d-block">ВК</a></li>
              <li><a href="#" class="d-block">TikTok</a></li>
              <li><a href="#" class="d-block">Telegram</a></li>
            </ul>
          </nav>
        </div>
        <p class="copyrights text-center">
          Все права защищены. Пользовательское соглашение. Политика
          конфиденциальности <br />© 2022 sarafancollection.ru
        </p>
      </div>
    </footer>
</template>

<script>
export default {
  
};
</script>

<style scoped>


  footer {
    padding: 41px 0 33px;
    border-top: 1px solid #c4c4c4;
  }

  footer .logo a {
    scroll-behavior: smooth;
  }

  footer .menu a {
    color: var(--text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    text-decoration: none;
    margin-bottom: 5px;
    transition: 0.5s all ease;
  }

  footer .menu a:hover {
    text-decoration: underline;
    text-decoration-color: var(--hover-color);
    color: var(--hover-color);
  }

  footer .menu .title {
    color: var(--text-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 113.9%;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
  }

  footer .copyrights {
    color: var(--text-color);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
    margin-top: 67px;
  }

</style>
