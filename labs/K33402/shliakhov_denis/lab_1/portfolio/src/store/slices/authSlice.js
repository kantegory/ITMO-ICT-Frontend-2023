import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user : null,
    status : 'Idle',
    error : null,
    token: null
}

export const authUser = createAsyncThunk(
    'post/authUser',
    async (payload, {rejectWithValue}) => {
        try {
            const {user , params} = payload
            const res = await axios.post(`http://localhost:8080/${params}` , user)

            if (res.status !== 201 && params === "register") {
                throw new Error('Ошибка при регистрации')
            }

            if (res.status !== 200 && params === "login") {
                throw new Error('Ошибка при входе')
            }

            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const authSlice = createSlice({
    name:'auth',
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
            state.status = "connect"
            state.token = action.payload.accessToken
            state.user = action.payload.user
        })
    }
})

export default authSlice.reducer