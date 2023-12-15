<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

export default {
  name: 'WelcomeView',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
}
</script>


<template>
  <div id="app">
    <Carousel>
      <Slide :index="1">
        <img src="https://img2.goodfon.com/original/2560x1440/7/5b/taylor-swift-karlie-kloss-3061.jpg" alt="Slide 1">
      </Slide>
      <Slide :index="2">
        <img src="https://images.expothemes.com/benedict-cumberbatch/images/benedict-cumberbatch-windows-theme-26-hd.jpg" alt="Slide 2">
      </Slide>
      <Slide :index="3">
        <img src="https://i-d-images.vice.com/images/2017/08/02/hari-nef-is-the-face-of-alessandro-micheles-first-gucci-fragrance-body-image-1501645824.jpg?crop=1xw%3A0.8809135399673735xh%3Bcenter%2Ccenter&resize=2000%3A*" alt="Slide 3">
      </Slide>
      <Slide :index="4">
        <img src="https://images.hdqwalls.com/download/kj-apa-2019-8k-vk-2048x1152.jpg" alt="Slide 4">
      </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </div>

 <div class="container my-5">
  <h3 style="text-align: left">Новинки</h3>
        <div class="row">
         <div class="col-md-3">
          <div class="card">
            <img src="https://www.dhresource.com/300x300/f2/albu/g14/M01/83/49/rBValF9XChGAHFByAACuzv1kp1E856.jpg" class="card-img-top" alt="Юбка">
            <div class="card-body">
              <h5 class="card-title">Юбка</h5>
              <p class="card-text">Цена: 2300 руб.</p>
            </div>
          </div>
         </div>
         <div class="col-md-3">
          <div class="card">
            <img src="https://inspira-te.com/wp-content/uploads/2017/03/304872l-0x0-n-148f820d-300x300.jpg" class="card-img-top" alt="Джинсы">
            <div class="card-body">
              <h5 class="card-title">Джинсы</h5>
              <p class="card-text">Цена: 1800 руб.</p>
            </div>
          </div>
         </div>
         <div class="col-md-3">
          <div class="card">
            <img src="https://i.pinimg.com/736x/2c/04/41/2c0441248919892d46d97e91fc2a1073.jpg" class="card-img-top" alt="Платье">
            <div class="card-body">
              <h5 class="card-title">Платье</h5>
              <p class="card-text">Цена: 3000 руб.</p>
            </div>
          </div>
         </div>
         <div class="col-md-3">
          <div class="card">
            <img src="https://i.pinimg.com/736x/bd/d2/12/bdd2127457cb691c1ef3e92cbacb053e.jpg" class="card-img-top" alt="Рубашка">
            <div class="card-body">
              <h5 class="card-title">Рубашка</h5>
              <p class="card-text">Цена: 2000 руб.</p>
            </div>
          </div>
         </div>
        </div>
       </div>
      
</template>


<style>
div .row {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  display: flex;
  justify-content: center;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x)/ -2);
  margin-left: calc(var(--bs-gutter-x)/ -2);

}



</style>