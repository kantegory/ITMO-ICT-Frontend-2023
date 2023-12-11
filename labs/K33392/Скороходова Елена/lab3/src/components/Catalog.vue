<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="container-fluid">
      <div class="container">
        <div
          class="catalog-headers d-flex justify-content-between align-items-center"
        >
          <h4>Товары</h4>
          <div class="parameters d-flex justify-content-end">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Сортировка
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <button class="dropdown-item" type="button">Новинки</button>
                </li>
                <li>
                  <button @click="sortByPriceAscending" class="dropdown-item">
                    По возрастанию цены
                  </button>
                </li>
                <li>
                  <button @click="sortByPriceDescending" class="dropdown-item">
                    По убыванию цены
                  </button>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="btn btn-primary filter"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Фильтр
            </button>

            <!-- Модальное окно -->
            <div
              class="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Закрыть"
                    ></button>
                  </div>
                  <div class="modal-body d-flex justify-content-around">
                    <div class="charateristics">
                      <p>Цвет</p>
                      <p>Характеристики</p>
                      <p>Тип изделия</p>
                      <p>Размер</p>
                      <p>Материалы</p>
                    </div>
                    <div class="pluses">
                      <button type="button" class="btn btn-primary pl">
                        <img src="@/assets/plus-lg.svg" alt="Плюс" />
                      </button>
                      <button type="button" class="btn btn-primary pl">
                        <img src="@/assets/plus-lg.svg" alt="Плюс" />
                      </button>
                      <button type="button" class="btn btn-primary pl">
                        <img src="@/assets/plus-lg.svg" alt="Плюс" />
                      </button>
                      <button type="button" class="btn btn-primary pl">
                        <img src="@/assets/plus-lg.svg" alt="Плюс" />
                      </button>
                      <button type="button" class="btn btn-primary pl">
                        <img src="@/assets/plus-lg.svg" alt="Плюс" />
                      </button>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                      Показать результаты ...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <!-- Проверка наличие карточек перед циклом -->
          <div v-if="productCards.length">
            <div v-for="product in productCards" :key="product.id" class="col">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  :src="product.image"
                  :alt="product.title"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">{{ product.price }} </p>
                  <p class="card-decsript">{{ product.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>Загрузка данных...</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useProductCards } from "@/composables/useProductCards";
import { watchEffect } from "vue";

export default {
  setup() {
    const {
      productCards,
      fetchProductData,
      sortByPriceDescending,
      sortByPriceAscending,
    } = useProductCards();

    // Вывод в консоль, когда данные приходят
    watchEffect(() => {
      console.log("Данные пришли:", productCards);
    });

    return {
      productCards,
      fetchProductData,
      sortByPriceDescending,
      sortByPriceAscending,
    };
  },
};
</script>

<style scoped>
/* Каталог */

main .catalog-headers {
  margin: 55px 0;
  color: var(--text-color);
}

main .catalog-headers h4 {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 113.9%;
  letter-spacing: 0.75px;
}

main .catalog-headers .btn-secondary {
  border: none;
  background: none;
  color: var(--text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

main .dropdown-item button:hover {
  border: 2px solid;
}

main .card img.card-img-top {
  width: 50%; /* Максимальная ширина для сохранения адаптивности */
  height: 400px;
}

main .dropdown-menu {
  background-color: var(--bg-color);
}

main .dropdown-menu .dropdown-item {
  color: var(--text-color);
}

main .dropdown-menu .dropdown-item:hover {
  color: var(--hover-color);
}

main .catalog-headers .filter {
  color: var(--text-color);
  font-size: 14px;
  border: none;
  background-color: var(--bg-color);
}

main .catalog-headers .parameters {
  gap: 37px;
}

main .card {
  border: none;
  margin-bottom: 80px;
  background: var(--bg-color);
}

main .card .card-body {
  padding-left: 0;
  padding-top: 20px;
}

main .card .card-img-top {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Модальное окно фильтра */

main .modal-content {
  background-color: var(--bg-color);
  color: var(--text-color);
}
main .modal-content .modal-body {
  margin-bottom: 269px;
}

main .modal-header,
.modal-footer {
  border: none;
}

main .modal-content .pl {
  border: none;
  background: none;
  display: flex;
  margin-top: 27px;
}

main .modal-content .charateristics p {
  margin-top: 30px;
}

main .modal-footer .btn-primary {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 113.9%;
  letter-spacing: 0.48px;
  border-radius: 0;
  padding: 19px 77px;
}

main .modal-footer .btn-primary:hover {
  color: var(--hover-color);
}

main .pluses .icon {
  height: 23px;
  width: 23px;
  color: var(--icon-color);
}
</style>
