<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from "vue";
import axios from "axios";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cart from "@/components/Cart.vue"
import CardList from "@/components/CardList.vue";

const items = ref([])
const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + Number(item.price), 0));

const filters = reactive({
	sortBy: 'title',
	searchQuery: '',
});

const onChangeSelect = event => {
	filters.sortBy = event.target.value
}

const onChangeSearchInput = event => {
	filters.searchQuery = event.target.value
}

const fetchItems = async () => {
	try {
		const params = {
			sortBy: filters.sortBy
		}

		if (filters.searchQuery) {
			params.title = `*${filters.searchQuery}*`
		}

		const { data } = await axios.get(`https://6f242298d88c9154.mokky.dev/products`, { 
			params 
		})

		items.value = data
	} catch (err) {
		console.log(err)
	}
}

const addToCart = (item) => {
	cart.value.push(item)
	item.isAdded = true
}

const removeFromCart = (item) => {
	cart.value.splice(cart.value.indexOf(item), 1)
	item.isAdded = false
}

const createOrder = async () => {
	try {
		const { data } = await axios.post(`https://6f242298d88c9154.mokky.dev/orders`, {
			items: cart.value,
			totalPrice: totalPrice.value
		})

		cart.value = []

		return data
	} catch (err) {
		console.log(err)
	}
}


const onClickAddPlus = (item) => {
  if (!item.isAdded) {
	addToCart(item)
  } else {
	removeFromCart(item)
  }
}

onMounted(async () => {
	const localCart = localStorage.getItem('cart')
	cart.value = localCart ? JSON.parse(localCart) : []

	await fetchItems()

	items.value = items.value.map((item) => ({
		...item,
		isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
	}))
})


watch(filters, fetchItems);

const cartOpen = ref(false);

const closeCart = () => {
	cartOpen.value = false
}

const openCart = () => {
	cartOpen.value = true
}

watch(cart, () => {
	items.value = items.value.map((item) => ({
		...item,
		isAdded: false
	}))
})

watch(
	cart, 
	() => {
		localStorage.setItem('cart', JSON.stringify(cart.value))
	},
	{ deep: true }
)

provide('cart', {
	cart,
	closeCart,
	openCart,
	addToCart,
	removeFromCart
})
</script>

<template>
<header>
    <Header @openCart="openCart"/>
    <Cart v-if="cartOpen" :total-price="totalPrice" @create-order="createOrder"/>
</header>
<section class="home-banner">
      <div class="container">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide block">
              <img src="../assets/img/banner1.png" alt="">
              <h2>Подарок на первый заказ</h2>
              <p>Получите 500 рублей за подписку на рассылку</p>
              <a href="">Подписаться</a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <section class="home-product">
      <div class="container">

		<div class="search-menu">
			<h3 class="all_products">Все товары</h3>

			<div class="search-block">
				<select @input="onChangeSelect" class="select-box">
				<option value="name">По названию</option>
				<option value="price">По цене (дешевые)</option>
				<option value="!price">По цене (дорогие)</option>
				</select>

				<div class="search-box">
				<input @change="onChangeSearchInput" class="search" placeholder="Поиск...">
				</div>
			</div>
		</div>

          <CardList :items="items" @add-to-cart="onClickAddPlus"/>

          <div class="pagination-block">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">•••</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <img src="../assets/icons/arrow.svg" alt="">
                  </a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </section> 
  <Footer />
</template>

<style scoped>
.home-banner {
	padding-top: 20px;
	padding-bottom: 25px;
	z-index: -1;
}

.home-banner .block {
	background: linear-gradient(180deg, #F1F1FB 0%, #EBEBF5);
	position: relative;
	box-shadow: 0px, 0x, 18.0727px rgba(0, 0, 0, 0.03);
	border-radius: 18.0727px;
	height: 254px;
	width: 100%;
	overflow: hidden;
	padding: 40px;
}


.home-banner .block img {
	position: absolute;
	top: 0;
	right: 0;
}

.home-banner .block h2 {
	font-style: normal;
	font-weight: normal;
	line-height: 31.6273px;
	line-height: 38px;

	color: #333333;
}

.home-banner .block p {
	font-size: 19.88px;
	line-height: 24px;
	color: #828282;
}

.home-banner .block a {
	font-weight: 500;
	font-size: 25.3018px;
	line-height: 30px;
	color: #FFFFFF;
	width: 218px;
	height: 52px;
	background: #333333;
	border-radius: 5px;
	display: block;
	text-decoration: none;
	text-align: center;
	line-height: 53px;
	margin-top: 34px;
}

.home-product {
	padding-top: 24px;
	padding-bottom: 68px;
}

.home-product h3.all_products {
	margin-bottom: 35px;
}

.search-menu {
	display: flex;
	justify-content: space-between;
}

.select-box {
	border: 1px solid #000;
  	border-radius: 1rem;
  	margin-bottom: 1.65rem;
 	padding: 0.5rem 4rem 0.5rem 1.5rem;
 	outline: none;
 	transition: border-color 0.2s ease-in-out;
}

.search-block {
	display: flex;
	gap: 15px;
}

.select-box:focus {
  border-color: #808080;
}

.search {
  	border: 1px solid #000;
  	border-radius: 1rem;
  	margin-bottom: 0.5rem;
  	padding: 0.5rem 1rem 0.5rem 2.5rem;
  	outline: none;
  	transition: border-color 0.2s ease-in-out;
}

.search:focus {
  	border-color: #808080;
}


.home-product .pagination-block {
	display: flex;
	justify-content: center;
}

.home-product .pagination-block ul li a {
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 25px;
	color: #000;
	width: 41px;
	height: 41px;
	border-radius: 5px;
	text-align: center;
	background-color: none;
	border: 0px solid #dee2e6;
	display: flex;
	justify-content: center;
	align-items: center;
}

.home-product .pagination-block ul li a img {
	width: 21px;
	height: 21px;
}

.pagination-block .page-item.active a {
	background: #333;
	color: white;
	margin: 0 10px;
  }
</style>