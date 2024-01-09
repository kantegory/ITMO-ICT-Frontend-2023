import axios from 'axios'
import { ref } from 'vue'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { router } from '@/main'
const currentName = ref([])
const currentSrc = ref([])
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

  const servicesApi = async () => {
    try {
      let url = `http://localhost:3000/services?q=${SearchQuery.value}`
      for (let check of filters.value) {
        url += `&Group=${check}`
      }

      const { data } = await axios.get(url)
      items.value = data
    } catch (err) {
      console.log(err)
    }
  }

  const orderApiPost = async (event) => {
    event.preventDefault()
    const date = document.getElementById('startDate').value
    const type = document.getElementById('comType').value
    var user = localStorage.getItem('user')
    var profileUsername = JSON.parse(user).id
    await axios.post('http://localhost:3000/orders', {
      Head: currentName.value,
      date: date,
      type: type,
      imgSrc: currentSrc.value,
      username: profileUsername
    })
    alert('Ordered!')
    currentName.value = ''
    currentSrc.value = ''
    document.getElementById('closeOrderModal').click()
  }

  const registerApi = async (event) => {
    event.preventDefault()

    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}

    for (const input of inputs) {
      loginData[input.name] = input.value
    }

    console.log('login data', loginData)
    try {
      await axios.post('http://localhost:3000/users', loginData)
      router.push('/services')
      new bootstrap.Modal(document.getElementById('modal-reg')).show()
    } catch (err) {
      alert(err.response.data)
    }
  }

  return {
    loginApi,
    ordersApi,
    orders,
    servicesApi,
    items,
    SearchQuery,
    filters,
    currentName,
    currentSrc,
    orderApiPost,
    registerApi
  }
}
