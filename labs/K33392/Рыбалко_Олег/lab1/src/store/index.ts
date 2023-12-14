import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import authReducer from './slices/auth'
import postsReducer from './slices/posts'

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store

