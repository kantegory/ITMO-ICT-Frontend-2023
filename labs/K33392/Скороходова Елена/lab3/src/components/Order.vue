<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="container-fluid">
    <div class="container">
      <h4 class="order-name">Оформление заказа</h4>
      <div class="row justify-content-center flex-lg-row flex-column-reverse">
        <div class="making-order col-lg-7">
          <form class="order-form">
            <h5 class="lk-sub-row">Способ доставки</h5>
            <div
              class="delivery col-xxl-7 col-lg-10 d-flex justify-content-between"
            >
              <div class="type-delivery">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="delivery"
                    value="Самовывоз"
                    id="flexRadio1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadio1">
                    Самовывоз
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="delivery"
                    value="Доставка курьером"
                    id="flexRadio2"
                  />
                  <label class="form-check-label" for="flexRadio2">
                    Доставка курьером
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="delivery"
                    value="Доставка курьером СДЭК"
                    id="flexRadio3"
                  />
                  <label class="form-check-label" for="flexRadio3">
                    Доставка курьером СДЭК
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="delivery"
                    value="Самовывоз СДЭК"
                    id="flexRadio4"
                  />
                  <label class="form-check-label" for="flexRadio4">
                    Самовывоз СДЭК
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="delivery"
                    value="Почта"
                    id="flexRadio5"
                  />
                  <label class="form-check-label" for="flexRadio5">
                    Почта
                  </label>
                </div>
              </div>
              <div class="costs">
                <p class="cost-delivery">Бесплатно</p>
                <p class="cost-delivery">от 300 руб.</p>
                <p class="cost-delivery">от 300 руб.</p>
                <p class="cost-delivery">от 200 руб.</p>
                <p class="cost-delivery">от 200 руб.</p>
              </div>
            </div>

            <div class="pay-type">
              <h5 class="lk-sub-row">Способ оплаты</h5>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="pay-type"
                  value="Online оплата картой"
                  id="flexRadio6"
                />
                <label class="form-check-label" for="flexRadio6">
                  Online оплата картой
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="pay-type"
                  value="Оплата наличными при получении"
                  id="flexRadio7"
                />
                <label class="form-check-label" for="flexRadio7">
                  Оплата наличными при получении
                </label>
              </div>
            </div>

            <div class="contact-data col-lg-7">
              <h5 class="lk-sub-row">Контактные данные</h5>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                  >Фамилия*</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                  >Имя*</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                  >Отчество*</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                  >Телефон*</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email*</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <p>* Поля, обязательные для заполнения</p>

              <div
                class="but-subm d-flex justify-content-lg-start justify-content-center"
              >
                <button
                  type="submit"
                  class="btn btn-primary d-flex align-items-center justify-content-center"
                >
                  Оплатить
                </button>
              </div>
              <p class="politics text-lg-start text-center">
                Нажимая на кнопку «оплатить», я принимаю условия
                <u>публичной оферты </u>и <u>политики конфиденциальности</u>
              </p>
            </div>
          </form>
        </div>

        <div class="count-block col-lg-5">
          <div class="counting d-flex justify-content-between">
            <div class="headings">
              <p class="cb">Общая стоимость</p>
              <p class="cb">Размер скидки</p>
              <p class="cb">Доставка</p>
              <p class="cb">Промокод</p>

              <p class="sum">Итого</p>
            </div>
            <div class="prices">
              <p class="cb">... руб.</p>
              <p class="cb">... руб.</p>
              <p class="cb">... руб.</p>
              <p class="cb">... руб.</p>
              <p class="sum">... руб.</p>
            </div>
          </div>
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
  /* Оформление заказа */

  main .order-form {
    margin-top: 100px;
    margin-bottom: 198px;
  }

  main .order-name {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    letter-spacing: 0.75px;
    margin-top: 40px;
  }

  main .order-form .lk-sub-row {
    color: var(--text-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    letter-spacing: 0.54px;
    margin-bottom: 40px;
  }

  main .order-form .mb-3 {
    color: var(--text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
  }

  main .order-form .btn-primary {
    margin-top: 50px;
    background: none;
    padding: 19px 158px;
    border-radius: 0;
    background-color: #2d2d2d;
    border-color: #2d2d2d;
  }

  main .order-form .btn-primary:hover {
    background: #a79797;
    border-color: #a79797;
  }

  main .count-block .sum {
    border-top: 1px solid #a79797;
    border-bottom: 1px solid #a79797;
    padding: 30px 0;
  }

  main .making-order .form-check {
    margin-bottom: 22px;
  }

  main .making-order .cost-delivery {
    margin-bottom: 22px;
    color: var(--text-color);
  }

  main .making-order .delivery {
    margin-bottom: 80px;
  }

  main .making-order .order-form {
    margin-top: 40px;
  }

  main .making-order .contact-data {
    margin-top: 80px;
  }

  main .making-order .contact-data .politics {
    margin-top: 21px;
    color: var(--text-color);
  }

  main .count-block {
    margin-top: 108px;
  }

  main .count-block .sum {
    margin-top: 60px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
</style>
