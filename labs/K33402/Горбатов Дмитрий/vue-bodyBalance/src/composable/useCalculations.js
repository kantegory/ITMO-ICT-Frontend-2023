import { ref } from 'vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import useApi from '@/composable/useApi'
const { getProfileFood } = useApi()
const calculated = ref(true)
const calorie = ref()
const bmi = ref()
const weight = ref()
export default function useCalculations() {
  async function calculate() {
    const username = JSON.parse(localStorage.getItem('user')).id
    const response = await fetch('http://localhost:3000/characteristics?id=' + username)
    weight.value = document.getElementById('weight').value
    console.log(weight.value)
    const responseJson = await response.json()
    let coef
    for (const chars of responseJson) {
      bmi.value = weight.value / Math.pow(Number(chars.height) / 100, 2)
      if (chars.activity == 'low') {
        coef = 1
      }
      if (chars.activity == 'normal') {
        coef = 1.3
      }
      if (chars.activity == 'high') {
        coef = 1.5
      }
      if (chars.sex == 'male') {
        if (Number(chars.age) < 31) {
          calorie.value = (0.063 * Number(weight.value) + 2.896) * 240 * coef
        }
        if (Number(chars.age) > 30 && Number(chars.age) < 61) {
          calorie.value = (0.048 * Number(weight.value) + 3.653) * 240 * coef
        }
        if (Number(chars.age) > 60) {
          calorie.value = (0.049 * Number(weight.value) + 2.459) * 240 * coef
        }
      } else {
        if (Number(chars.age) < 31) {
          calorie.value = (0.062 * Number(weight.value) + 2.036) * 240 * coef
        }
        if (Number(chars.age) > 30 && Number(chars.age) < 61) {
          calorie.value = (0.034 * Number(weight.value) + 3.538) * 240 * coef
        }
        if (Number(chars.age) > 60) {
          calorie.value = (0.038 * Number(weight.value) + 2.755) * 240 * coef
        }
      }
      calculated.value = false
    }
  }
  async function addFood(name) {
    const { data } = await axios.get('http://localhost:3000/food?name=' + name)
    console.log(data[0].calorie)
    const username = JSON.parse(localStorage.getItem('user')).id
    var d = new Date()
    var curr_date = d.getDate()
    var curr_month = d.getMonth() + 1
    var curr_year = d.getFullYear()

    const totalCalories = (document.getElementById(name).value * data[0].calorie) / 100
    const post = {
      name: name,
      gram: document.getElementById(name).value,
      totalCalories: totalCalories + '',
      username: username,
      date: curr_year + '-' + curr_month + '-' + curr_date,
      img: data[0].img
    }
    console.log(post)
    axios.post('http://localhost:3000/calories', post)
  }
  async function deleteFood(id) {
    axios.delete('http://localhost:3000/calories/' + id)
    getProfileFood(true)
  }

  return {
    calorie,
    bmi,
    calculate,
    calculated,
    addFood,
    deleteFood
  }
}
