// import axios from 'axios'
import { ref } from 'vue'
const change = ref(true)
const sex = ref()
const height = ref()
const age = ref()
const activity = ref()
export default function useProfile() {
  const postChar = async (event) => {
    event.preventDefault()
    const username = JSON.parse(localStorage.getItem('user')).id
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const charData = {}

    for (const input of inputs) {
      charData[input.name] = input.value
    }
    charData['id'] = username

    await fetch('http://localhost:3000/characteristics/' + username, {
      method: 'PATCH',
      body: JSON.stringify(charData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getChars()
  }
  const getChars = async () => {
    const username = JSON.parse(localStorage.getItem('user')).id
    console.log('http://localhost:3000/characteristics?id=' + username)
    const response = await fetch('http://localhost:3000/characteristics?id=' + username)

    const responseJson = await response.json()
    for (const chars of responseJson) {
      sex.value = chars.sex
      age.value = chars.age
      activity.value = chars.activity
      height.value = chars.height
    }
  }
  return {
    change,
    postChar,
    sex,
    age,
    activity,
    height
  }
}
