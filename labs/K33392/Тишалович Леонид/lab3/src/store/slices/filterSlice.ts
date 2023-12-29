import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedGender: string;
}

const initialState: FilterState = {
  selectedGender: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedGender(state, action: PayloadAction<string>) {
      state.selectedGender = action.payload;
    },
  },
});

export const { setSelectedGender } = filterSlice.actions;
export default filterSlice.reducer;
