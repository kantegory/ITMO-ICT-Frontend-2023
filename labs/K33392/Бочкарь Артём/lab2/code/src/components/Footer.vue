<script>

</script>

<template>
 <footer>
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-left">
            <div class="phones">
              <div class="phone-item">
                <span>Бесплатный звонок по РФ</span>
                <a href="tel:+79533458549">+7 (953) 345-85-49</a>
              </div>
              <div class="phone-item">
                <span>Для приёма заказов</span>
                <a href="tel:+79811304497">+7 (981) 130-44-97</a>
              </div>
            </div>
            <div class="work-time">
              График работы по будням с 9:00 до 21:00
            </div>
            <div class="work-email">
              <a href="mailto:artusick@list.ru">Email: artusick@list.ru</a>
              <a href="" class="site-help">Поддержка</a>
            </div>
          </div>
          <div class="footer-centre">
            <div class="social">
              <a href="">Мы в вконтакте ></a>
              <a href="">Мы в instagram ></a>
            </div>
          </div>
          <div class="footer-right">
            <div class="person">
              <a href=""><img src="../assets/icons/person.svg" alt=""><span>Войти / Регистрация</span></a>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <span>©2024. Пиросмани</span>
          <a href="">Условия соглашения</a>
          <a href="">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>  
</template>

<style scoped>
footer {
	background: #333;
	color: #FFFFFF;
	padding: 34px 0;
}

footer a {
	color: #FFFFFF;
	text-decoration: none;
}

footer .footer-wrapper {
	display: flex;
	justify-content: space-between;
}

footer .footer-wrapper .footer-left .phones {
	display: flex;
	justify-content: space-between;
}

footer .footer-wrapper .footer-left .phones .phone-item {
	display: flex;
	flex-direction: column;
}

footer .footer-wrapper .footer-left .phones .phone-item span {
	font-size: 12.3407px;
	line-height: 32px;
}

footer .footer-wrapper .footer-left .phones .phone-item a {
	font-weight: 500;
	font-size: 18.511px;
	line-height: 39px;
	text-decoration: none;
	margin-right: 30px;
}

footer .footer-wrapper .footer-left .phones .phone-item span a :last-child {
	margin-right: 0;
}

footer .footer-wrapper .footer-left .work-time {
	font-size: 15.4259px;
	line-height: 32px;
	margin-top: 10px;
	margin-bottom: 10px;
}

footer .footer-wrapper .footer-left .work-email {
	display: flex;
	flex-direction: column;
}

footer .footer-wrapper .footer-left .work-email a {
	font-size: 18.511px;
	line-height: 32px;
}

footer .footer-wrapper .footer-left .work-email a.site-help {
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	text-decoration: underline;
	margin-top: 15px;
}

footer .footer-wrapper .footer-centre .social {
	display: flex;
	flex-direction: column;
}

footer .footer-wrapper .footer-centre .social a {
	font-weight: 500;
	font-size: 15.4259px;
	line-height: 32px;
	letter-spacing: 3.08517px;
	font-variant: small-caps;
	text-transform: uppercase;
	margin-bottom: 26px;
}

footer .footer-wrapper .footer-right .person a {
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: 15.4259px;
	line-height: 32px;
}

footer .footer-wrapper .footer-right img {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

footer .footer_bottom {
	margin-top: 9px;
	font-size: 12.3407px;
	line-height: 32px;
	font-family: "TTHovesRegular";
}

footer .footer_bottom a {
	font-size: 12.3407px;
	line-height: 32px;
	margin-left: 33px;
}
</style>