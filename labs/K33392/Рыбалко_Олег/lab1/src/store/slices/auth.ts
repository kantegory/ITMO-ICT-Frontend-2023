import { createSlice } from '@reduxjs/toolkit'

export type AuthState = {
  username: string
  password: string
  email: string
}
const initialState: AuthState = {
  username: localStorage.getItem('username') ?? '',
  password: localStorage.getItem('password') ?? '',
  email: localStorage.getItem('email') ?? '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginAction: (state, action) => {
      state.username = action.payload.username
      state.password = action.payload.password
      state.email = action.payload.email

      localStorage.setItem('username', action.payload.username)
      localStorage.setItem('password', action.payload.password)
      localStorage.setItem('email', action.payload.email)

      return state
    },
  },
})

export const { loginAction } = authSlice.actions
export default authSlice.reducer

