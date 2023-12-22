<template>
    <section class="main_page">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="slogan">
                    <h1 class="text-center text-white text-title">Тайны города</h1>
                    <h2 class="text-center text-white text-subtitle">в твоем кармане</h2>
                </div>
                <div class="moto">
                    <h4 class="text-center text-white">ЗНАКОМИМ ВАС С ГОРОДОМ, <br> СОБИРАЯ ЕГО ПО ДЕТАЛЬКАМ, КАК
                        ПАЗЛ</h4>
                </div>
                <div class="button-group">
                    <a href="#link_page">
                        <button type="button" class="btn btn-primary primary-button">Купить</button>
                    </a>
                    <a href="#about_us">
                        <button type="button" class="btn btn-outline-light outline-button">Подробнее</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.main_page {
    display: flex;
    justify-content: center;
    align-items: center;

    background: url(../assets/images/mainBackground.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: calc(100vh - 82px);
}

.moto {
    padding-top: 65px;
}

</style>