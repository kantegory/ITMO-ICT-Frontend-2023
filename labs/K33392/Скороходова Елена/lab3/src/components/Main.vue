<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
      <div class="container-fluid px-0">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000">
          <div class="carousel-indicators d-md-none">
            <!-- Скрыть на маленьких экранах -->
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="@/assets/Group 108.png" alt="woman in dress on the chair" class="d-block w-100 img-fluid"/>
            </div>
            <div class="carousel-item">
              <img src="@/assets/Group 108.png" alt="woman in dress on the chair" class="d-block w-100 img-fluid"/>
            </div>
            <div class="carousel-item">
              <img src="@/assets/Group 108.png" alt="woman in dress on the chair" class="d-block w-100 img-fluid"/>
            </div>
          </div>
          <button
            class="carousel-control-prev d-none d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <!-- Скрыть на маленьких экранах -->
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Предыдущий</span>
          </button>
          <button
            class="carousel-control-next d-none d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <!-- Скрыть на маленьких экранах -->
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Следующий</span>
          </button>
        </div>
        <div class="container">
          <h5>Успей купить</h5>

          <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" id="product-container">
          </div>
        </div>
      </div>
    </main>

</template>

<script>
export default {
  
};
</script>

<style scoped>


main .container {
  margin-top: 115px;
  margin-bottom: 120px;
  color: var(--text-color);
}

.categories {
  margin-top: 30px;
}

.categories .categories-menu h3 {
  padding-left: 28px;
  padding-right: 15px;
}

.categories .categories-menu {
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding-bottom: 10px;
  padding-top: 14px;
}

.categories .categories-menu ul li {
  padding-left: 28px;
  padding-right: 15px;
  margin-top: 12px;
}

.categories .categories-menu a {
  color: var(--text-color);
  text-decoration: none;
}

.icon{
  height: 26px;
  width: 26px;
  fill: var(--icon-color);
}

.dropdown .icon{
  height: 30px;
  width: 30px;
  fill: var(--icon-color);
}

main .container {
  margin-top: 115px;
  margin-bottom: 120px;
  color: var(--text-color);
}
</style>
