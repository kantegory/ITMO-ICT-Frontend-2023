import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import {rememberEnhancer, rememberReducer} from "redux-remember";

const rememberedKeys = ['auth'];


const store = configureStore({
    reducer: rememberReducer({
        auth : authSlice
    }),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        {persistWholeStore:true}
    )]
})

export default store