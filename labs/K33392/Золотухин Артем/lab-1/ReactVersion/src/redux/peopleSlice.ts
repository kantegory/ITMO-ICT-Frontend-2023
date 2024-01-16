import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PeopleState {
  amount: number
}

const initialState: PeopleState = {
  amount: 10,
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeopleAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
  },
})

export const { setPeopleAmount } = peopleSlice.actions
export default peopleSlice.reducer
