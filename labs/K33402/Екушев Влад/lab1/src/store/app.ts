import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from 'src/types/Theme'

type AppState = {
  theme: Theme
}

const initialState: AppState = {
  theme: Theme.LIGHT,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload
    },
  },
})

export const { setTheme } = slice.actions

export default slice.reducer
