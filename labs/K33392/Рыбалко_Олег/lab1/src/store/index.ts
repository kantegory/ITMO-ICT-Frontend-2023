import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import authReducer from './slices/auth'
import postsReducer from './slices/posts'
import usersReducer from './slices/users'

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store

