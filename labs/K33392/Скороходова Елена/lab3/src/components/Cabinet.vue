<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <main class="container-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <form class="lk-form col-6">
            <h4 class="lk-name text-md-center text-left">Личный кабинет</h4>
            <h5 class="lk-sub-row">Данные аккаунта</h5>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label"
                >Фамилия</label
              >
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Имя</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label"
                >Телефон</label
              >
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div
              class="but-subm d-flex align-items-center justify-content-center"
            >
              <button
                type="submit"
                class="btn btn-primary col-4 d-flex align-items-center justify-content-center"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
</template>


<script>
export default {
  
};
</script>

<style scoped>
      /* Линчный кабинет*/

  main .lk-form {
    margin-top: 100px;
    margin-bottom: 198px;
  }

  main .lk-form .lk-name {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 28.475px */
    letter-spacing: 0.75px;
    margin-bottom: 40px;
  }

  main .lk-form .lk-sub-row {
    color: var( --text-color);

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 20.502px */
    letter-spacing: 0.54px;
    margin-bottom: 40px;
  }

  main .lk-form .mb-3 {
    color: var( --text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 113.9%;
    /* 15.946px */
  }

  main .lk-form .btn-primary {
    margin-top: 50px;
    background: none;
    padding: 19px 158px;
    border-radius: 0;
    color: #ffffff;
    border-color: #2d2d2d;
    background: #2d2d2d;
  }

  main .lk-form .btn-primary:hover {
    background: #a79797;
    border-color: #a79797;
  }

</style>