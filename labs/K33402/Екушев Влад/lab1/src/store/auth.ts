import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiUser, UserGetSelfRes } from 'src/types/api'
import { FetchingState } from 'src/types/FetchingState'
import axios from 'axios'
import { API_URL } from 'src/config/constants'

type AuthState = {
  user: ApiUser | null
  state: FetchingState
  currentRequestId: string | null
}

const initialState: AuthState = {
  user: null,
  state: FetchingState.IDLE,
  currentRequestId: null,
}

export const fetchUserSelf = createAsyncThunk<
  ApiUser | null,
  void,
  { state: { auth: AuthState } }
>('auth/getUserSelf', async (_, { getState, requestId }) => {
  const { state, currentRequestId } = getState().auth

  if (state !== FetchingState.PENDING || requestId !== currentRequestId) {
    return null
  }

  const response = await axios<UserGetSelfRes>({
    url: API_URL + '/user',
    method: 'GET',
  })

  return response.data.user
})

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<ApiUser | null>) => {
      state.user = payload
    },
    setUserFetchingState: (
      state,
      { payload }: PayloadAction<FetchingState>
    ) => {
      state.state = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSelf.pending, (state, action) => {
        if (state.state === FetchingState.IDLE) {
          state.state = FetchingState.PENDING
          state.currentRequestId = action.meta.requestId
        }
      })
      .addCase(fetchUserSelf.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (
          state.state === FetchingState.PENDING &&
          state.currentRequestId === requestId
        ) {
          state.state = FetchingState.FULFILLED
          state.user = action.payload || null
          state.currentRequestId = null
        }
      })
      .addCase(fetchUserSelf.rejected, (state, action) => {
        const { requestId } = action.meta
        if (
          state.state === FetchingState.PENDING &&
          state.currentRequestId === requestId
        ) {
          state.state = FetchingState.REJECTED
          state.currentRequestId = null
          state.user = null
        }
      })
  },
})

export const { setUser, setUserFetchingState } = slice.actions

export default slice.reducer
