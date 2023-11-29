import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    email : null,
    status : 'Idle',
    token: null
}

export const authUser = createAsyncThunk(
    'post/authUser',
    async (payload, {rejectedWithValue}) => {
        try {
            const {user , params} = payload
            const res = await axios.post(`http://localhost:8080/${params}` , user)

            if (res.status !== 201) {
                throw new Error('Ошибка при регистрации')
            }

            if (res.status !== 200) {
                throw new Error('Ошибка при входе')
            }

            return res
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(authUser.pending, (state) => {
            state.status = 'loading'
            state.error = null
            state.token = null
        })

        builder.addCase(authUser.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.status = action.payload.status
            state.email = action.payload.email
            state.token = action.payload.accessToken
        })
    }
})

export default userSlice.reducer