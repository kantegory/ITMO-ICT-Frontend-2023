import { ref } from 'vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
const cartProducts = ref([])
export default function useCart() {
  const addToCart = async (name) => {
    try {
      let url = `http://localhost:3000/products?name_like=${name.replaceAll(' ', '%20')}`
      const { data } = await axios.get(url)
      cartProducts.value.push(data[0])
    } catch (err) {
      console.log(err)
    }
  }

  const MakeOrder = async (event) => {
    event.preventDefault()
    if (localStorage.getItem('accessToken')) {
      if (Object.keys(cartProducts.value).length != 0) {
        var user = localStorage.getItem('user')
        var profileUsername = JSON.parse(user).id
        console.log(profileUsername)
        var date = new Date()
        for (let product of cartProducts.value) {
          console.log(product)
          await axios.post('http://localhost:3000/orders', {
            name: product.name,
            date: date.toDateString(),
            price: product.price,
            imgSrc: product.imgSrc,
            username: profileUsername
          })
        }
        cartProducts.value = []
        document.getElementById('cartClose').click()
      } else {
        document.getElementById('cartClose').click()
        alert('First add something to cart!')
      }
    } else {
      document.getElementById('cartClose').click()
      new bootstrap.Modal(document.getElementById('modal-reg')).show()
    }
  }

  return {
    addToCart,
    cartProducts,
    MakeOrder
  }
}
