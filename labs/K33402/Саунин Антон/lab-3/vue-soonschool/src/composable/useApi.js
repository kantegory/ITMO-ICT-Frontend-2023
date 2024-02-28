import axios from 'axios'
import { ref } from 'vue'
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

  const catalogApi = async (sex = '') => {
    try {
      let checks = []
      let url = `http://localhost:3000/products?q=${SearchQuery.value}`
      if (sex == 'boys') {
        url += `&sex=boys`
      }
      if (sex == 'girls') {
        url += `&sex=girls`
      }
      if (sex == 'acs') {
        url += `&sex=acs`
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

  return {
    loginApi,
    ordersApi,
    orders,
    catalogApi,
    items,
    SearchQuery,
    filters
  }
}
