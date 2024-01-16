<!-- eslint-disable vue/multi-word-component-names -->
<script>


</script>


<template>

<nav class = "navigation">
	<nav class="navbar navbar-expand-lg navbar-light bg-white">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="@/assets/logo.png" alt="Логотип"></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="nav nav-tabs me-auto mb-2 mb-lg-0 top-menu">
					<li class="nav-item">
						<router-link class="dropdown-item" to="/home">Главная</router-link>
					</li>
					<li class="nav-item">
						<router-link class="dropdown-item" to="/catalog" >Каталог</router-link>
						
					</li>
					<li class="nav-item">
						
					</li>
				</ul>

				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
						<span class="sr-only"><img src="@/assets/user.svg" alt="user" /></span>
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<router-link class="dropdown-item" to="/registration">Регистрация</router-link>
							<router-link class="dropdown-item" to="/enter">Вход</router-link>
		
						</ul>
					</li>
					<li class="korzina">
						<router-link class="dropdown-item" to="/cart"><span class="sr-only"><img src="@/assets/cart.svg" alt="cart" /></span></router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</nav>
</template>

<style>
.navbar-brand img {
    max-width: 120px;
  }

a {

	color:var(--text-color);

}

a:hover{

	color:var(--hover-color);
}

.navbar-light .navbar-nav .nav-link{

	color:var(--bg-color);
	font-weight: 500px;
	text-transform: uppercase;

}

.navbar-nav .dropdown-menu {
	right: 0;
	left: auto;
}

.top-menu li a::after {

	content: 0;
	display: block;
	width: 100%;
	background-color:var(--bg-color);
	height: 1px;
	transition: all .3s;
	transform: scale(0);

}
.nav-item{
	padding-left:30px;
	font-size: 20px;
}
.nav-item:hover{
	color: rgb(188, 194, 159) ;
}

.korzina{
	padding-top:10px;
	padding-right:15px;
}

.top-menu li a:hover::after {

	transform: scale(1);

}
form {
	width: 50%;
	margin: 0 auto; 
  }
  
  input {
	width: 100%; 
  }
  
  label {
	display: block; 
  }
  
  .form-check-label {
	margin-left: 0; 
  }


.form-group{
	color: var( --text-color);
	font-size: 20px;
	

}
.mb-3{
	font-size: 18px;
	color: var( --text-color);

}

.square-box {
	border: 1px solid rgb(141, 111, 4);
	padding: 10px;
	display: inline-block;
	color: var(--text-color);
  }

  .btn-primary {
	background-color:var(--bg-color);
	padding: 10px 20px;
	margin-right: 10px;
  }

  .btn-primary:hover {

	background-color:var(--bg-color);
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: auto;
  }
  .row {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
    display: flex;
    justify-content: flex-start;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2);
  }

  .icon{
	height: 30px;
	width: 30px;
  }

span img{
    width: 28px;
    height: 33px;

}


</style>