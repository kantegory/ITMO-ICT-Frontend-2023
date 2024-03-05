<script setup></script>

<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center" style="padding-top: 5%">
      <div class="d-flex flex-column">
        <h1 class="text-center">How to use the service</h1>
        <!-- <hr> -->
        <h2 class="text-center guideItem" style="margin-top: 30px">1. Fill out your profile</h2>

        <img src="/guide1.png" alt="" class="guideImg border guideItem" />
        <hr />
        <h2 class="text-center guideItem">2. Go to the "today" page</h2>

        <img src="/guide2.png" alt="" class="guideImg border guideItem" />
        <hr />
        <h2 class="text-center guideItem">3. Enter your weight</h2>

        <img src="/guide3.png" alt="" class="guideImg border guideItem" />
        <hr />

        <h2 class="text-center guideItem">4. Get your results</h2>
        <img src="/guide4.png" alt="" class="guideImg border guideItem" />
        <hr />

        <h2 class="text-center guideItem">
          4. After a few days, you'll be able to see a graph of your weight progression on
          "progress" page
        </h2>
        <img src="/guide5.png" alt="" class="guideImg border guideItem" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guideImg {
  max-height: 400px;
  max-width: 800px;
  margin: auto;
}
.guideItem {
  margin-bottom: 3%;
  margin-top: 3%;
}
</style>
