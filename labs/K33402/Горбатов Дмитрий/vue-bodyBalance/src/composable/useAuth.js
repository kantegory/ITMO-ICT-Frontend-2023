import { ref } from 'vue'
import useApi from '@/composable/useApi'

const { loginApi } = useApi()
const sign = ref(true)
const username = ref(localStorage.getItem('user'))
export default function useAuth() {
  const login = async (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}
    console.log(loginData)
    for (const input of inputs) {
      loginData[input.name] = input.value
    }
    loginApi(loginData, username)
  }
  const logout = () => {
    localStorage.clear()
    username.value = ''
  }
  return {
    username,
    login,
    logout,
    sign
  }
}
