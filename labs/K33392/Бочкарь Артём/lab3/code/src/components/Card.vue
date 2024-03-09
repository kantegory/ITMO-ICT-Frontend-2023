<script setup>
defineProps({
	title: String,
	description: String,
	price: Number,
	rent: Number,
	isAdded: Boolean,
	isFavourite: Boolean,
	onClickAdd: Function
})
</script>

<template>
<div class="product">
            <div class="img">
                <img class="picture" src="../assets/img/product.png" alt="">
            </div>
              <p class="title">{{ title }}</p>
              <p class="description">{{ description }}</p>

			<div class="price-block">
				<div class="price">
               		<b>{{ price }} ₽</b> <span>{{ rent }} ₽/сут.</span>
             	</div>
			  	<div class="buttons">
					<!--<img class="addToCart" @click="onClickAdd()" src="../assets/icons/plus.svg"/>-->
					<img class="addToCart" @click="onClickAdd()" v-if="!isAdded" src="../assets/icons/plus.svg"/>
  					<img class="addToCart" @click="onClickAdd()" v-else src="../assets/icons/checked.svg"/>
					<img class="addToFavourite" v-if="!isFavourite" src="../assets/icons/like-1.svg"/>
					<img class="addToFavourite" v-else src="../assets/icons/like-2.svg"/>
			 	</div>
			  </div>
            </div>
</template>

<style scoped>
.home-product .products-wrapper .product {
	width: 205px;
	height: 390px;
	margin-bottom: 56px;
	position: relative;
	border: 1px solid black;
	border-radius: 15px;
	text-align: center;
	transition: transform 0.4s ease-in-out;
}

.product:hover {
  transform: scale(1.1);
}

.price-block {
	position: absolute;
	right: 22px;
  	bottom: 0;
}

.home-product .products-wrapper .product .picture {
	background-color: #E6E6E6;
	border-radius: 10.52641px;
	height: 125.83px;
	overflow: hidden;
	margin-top: 10px;
}

.home-product .products-wrapper .product .picture img {
	width: 100%;
	height: 100%;
}

.home-product .products-wrapper .product .title {
	margin: 9px 0 5px;
	display: block;
	font-weight: 500;
	font-size: 14.4845;
	line-height: 22px;
	color: #000;
}

.home-product .products-wrapper .product .description {
	font-size: 12.764px;
	line-height: 19px;
	color: #000;
	margin-bottom: 8px;
}

.home-product .products-wrapper .product .price b {
	font-weight: 500;
	font-size: 18.1056px;
	line-height: 23px;
	color: #000;
	margin-right: 10px;
}

.home-product .products-wrapper .product .price b span {
	font-size: 12.674px;
	line-height: 23px;
	color: #828282;
}

.buttons {
	padding-top: 10px;
	padding-bottom: 10px;
}

.addToCart {
	width: 50px;
	height: 50px;
	margin-right: 30px;
	margin-left: 5px;
	opacity: 0.3;
    cursor: pointer;
    &:hover {
        opacity: 1;
	}
}

.addToFavourite {
	width: 50px;
	height: 50px;
	opacity: 0.3;
    cursor: pointer;
    &:hover {
        opacity: 1;
	}
}

.home-product .products-wrapper .product a.to-cart {
	margin-top: 13px;
	width: 140px;
	height: 38px;
	left: 223px;
	top: 846.44px;
	background: #333333;
	border-radius: 4.52641px;
	line-height: 38px;
	text-align: center;
	font-size: 18.1056px;
	display: inline-block;
	color: #FFFFFF;
	text-decoration: none;
}
</style>