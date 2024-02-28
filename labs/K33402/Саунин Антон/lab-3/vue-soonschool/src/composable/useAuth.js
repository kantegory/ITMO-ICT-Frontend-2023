import { ref } from 'vue'
import { router } from '@/main'
import useApi from '@/composable/useApi'

const { loginApi } = useApi()
const username = ref(localStorage.getItem('user'))
export default function useAuth() {
  const login = async (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target.querySelectorAll('input'))
    const loginData = {}

    for (const input of inputs) {
      loginData[input.name] = input.value
    }
    loginApi(loginData, username)
  }
  const logout = () => {
    localStorage.clear()
    username.value = ''
  }
  const OpenProfile = () => {
    router.push('/profile')
  }
  return {
    username,
    login,
    logout,
    OpenProfile
  }
}
