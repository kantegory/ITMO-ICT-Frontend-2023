import axios from 'axios'
import { ref } from 'vue'
const food = ref()
const categoryFilter = ref([])
const subcategoryFilter = ref([])
const searchFilter = ref('')
const profileFood = ref()

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
      })
      .catch(function (error) {
        console.log(error)
        alert('email or password is incorrect')
      })
    document.getElementById('closeAuth').click()
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
      await axios.post('http://localhost:3000/characteristics', {
        sex: '',
        height: '',
        age: '',
        activity: '',
        id: loginData['id']
      })
    } catch (err) {
      alert(err.response.data)
    }
    document.getElementById('closeAuth').click()
  }
  const getFood = async () => {
    let url = 'http://localhost:3000/food?'
    if (searchFilter.value != '') {
      url += 'name_like=' + searchFilter.value
    }
    for (let check of categoryFilter.value) {
      url += `&category_like=${check}`
    }
    for (let check of subcategoryFilter.value) {
      url += `&subcategory=${check}`
    }
    const { data } = await axios.get(url)

    food.value = data
  }
  const getProfileFood = async (del = false) => {
    if (del) {
      alert('Deleted!')
    }
    const username = JSON.parse(localStorage.getItem('user')).id
    var d = new Date()
    var curr_date = d.getDate()
    var curr_month = d.getMonth() + 1
    var curr_year = d.getFullYear()
    let url =
      'http://localhost:3000/calories?usename=' +
      username +
      '&date=' +
      curr_year +
      '-' +
      curr_month +
      '-' +
      curr_date
    const { data } = await axios.get(url)

    profileFood.value = data
    console.log(data[0].totalCalories)
  }
  return {
    loginApi,
    registerApi,
    food,
    getFood,
    categoryFilter,
    subcategoryFilter,
    searchFilter,
    getProfileFood,
    profileFood
  }
}
