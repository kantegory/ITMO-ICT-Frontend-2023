<script>
  export default {
    name: 'ProfileInfo',
    props: {
      userName: {
        type: String,
      },
      firstName: {
        type: String,
      },
      email: {
<<<<<<< Updated upstream
        type: Date,
=======
        type: String,
>>>>>>> Stashed changes
      },
      capCount: {
        type: String,
      },
    }
  }
</script>

<template>
  <div class="card col-12" id="profileCard">
    <div class="row">
      <div class="col-xl-2 col-md-4 col-sm-4">
        <img src="/src/assets/img/profile.jpg" class="img-fluid rounded-start">
      </div>
      <div class="col-xl-10 col-md-8 col-sm-8">
        <div class="card-body">
          <h5 class="card-title me-2 mt-2 text-end">{{ userName }}</h5>
          <div class="card-text text-start">
            <p class="fw-bold">Имя: <span class="fw-normal" > {{ firstName }} </span></p>
            <p class="fw-bold">Email: <span class="fw-normal" > {{ email }} </span></p>
            <p class="fw-bold">Кол-во созданных капсул: <span class="fw-normal" > {{ capCount }} </span></p>
          </div>
        </div>
        <div class="card-footer">
          <div class="justify-s-b">
<!--            <button type="button" class="btn btn-sm btn-my-main" onclick="loadProfilePage(event, 1)">-->
<!--              Изменить данные-->
<!--              <svg class="icons">-->
<!--                <use xlink:href="#redactIcon"></use>-->
<!--              </svg>-->
<!--            </button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-footer{
  font-size: small;
  padding: 5px;
  background-color: var(--color3);
}

.card-header{
  padding: 10px;
  display: flex;
  align-items: center;
}

.card-body{
  padding: 9px;
}

.card{
  background-color: var(--color3);
  color: var(--color4);
}
</style>