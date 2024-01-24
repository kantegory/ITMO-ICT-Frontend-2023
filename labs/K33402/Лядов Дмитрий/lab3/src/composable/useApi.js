import axios from 'axios'
import { ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { router } from '@/main'
const orders = ref([])
const items = ref([])
const SearchQuery = ref('')
const filters = ref([])
export default function useApi() {
  const loginApi = (loginData, username) => {
    axios
      .post('http://localhost:3000/login', loginData)
      .then(function (response) {
        const { data } = response
        const { accessToken, user } = data
        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)

        username.value = user
        const btnClose = document.getElementById('btnClose')
        btnClose.click()
      })
      .catch(function (error) {
        console.log(error)
        alert('email or password is incorrect')
      })
  }

  const ordersApi = async () => {
    const username = JSON.parse(localStorage.getItem('user')).id
    let url = `http://localhost:3000/orders?username=${username}`
    const { data } = await axios.get(url)
    orders.value = data
  }

  const catalogApi = async (sales) => {
    try {
      let checks = []
      let url = `http://localhost:3000/products?q=${SearchQuery.value}`
      if (sales) {
        url += `&isOnSale=yes`
      }
      for (let check of filters.value) {
        checks.push(check)
        url += `&type=${check}`
      }

      const { data } = await axios.get(url)
      items.value = data
    } catch (err) {
      console.log(err)
    }
  }
  const registrationApi = async (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}

    for (const input of inputs) {
      loginData[input.name] = input.value
    }

    console.log('login data', loginData)

    await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    router.push('/catalog')
    new bootstrap.Modal(document.getElementById('modal-reg')).show()
  }

  //   const salesApi = async () => {
  //     try {
  //       let checks = []
  //       let url = `http://localhost:3000/products?q=${SearchQuery.value}&isOnSale=yes`
  //       for (let check of filters.value) {
  //         checks.push(check)
  //         url += `&type=${check}`
  //       }

  //       const { data } = await axios.get(url)
  //       items.value = data
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  return {
    loginApi,
    ordersApi,
    orders,
    catalogApi,
    items,
    SearchQuery,
    filters,
    registrationApi
  }
}
