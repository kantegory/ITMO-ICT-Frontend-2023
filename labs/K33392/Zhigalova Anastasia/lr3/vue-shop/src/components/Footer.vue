<!-- eslint-disable vue/multi-word-component-names -->
<template>
<footer class="text-center">
  <div class="bg py-3">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <h5>О нас</h5>
          <div>THC</div>
        </div>
  
        <div class="col-2">
          <h5>Время работы</h5>
          <ul class="list-unstyled">
            <div>Каждый день с 9:00 до 18:00</div>
          </ul>
        </div>
  
        <div class="col-3">
          <h5>Мы в сети</h5>
          <img src="@/assets/instagram.svg" alt="Instagram" />
          <a href="https://t.me/aanazhi"><img src="@/assets/telegram.svg" alt="Telegram" /></a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>


<script>

export default {
  
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}


footer .row {
    margin-bottom:5px;
  }
footer {
    background-color: #dedad5;
    text-align:center;
    
    height: 100px;
    
  }

footer .col-4{
	font-size: 27px;
  font-weight: bold;
  justify-content: center;
}
footer .col-1{
  position: absolute;
  font-size: 20px;
  left: 20%;
}
footer .col-2{
  position: absolute;
  font-size: 18px;
  left: 40%;
}
footer .col-3{
  position: absolute;
  left: 60%;
  font-size: 20px;
}
footer img{
    width: 20px;
    height: 20px;

} 

</style>