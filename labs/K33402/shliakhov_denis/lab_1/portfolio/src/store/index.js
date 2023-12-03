import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import {rememberEnhancer, rememberReducer} from "redux-remember";
import {projectsApi} from "./projectsApi";

const rememberedKeys = ['authSlice'];

const reducers = combineReducers( {
    authSlice,
    [projectsApi.reducerPath] : projectsApi.reducer
})

const store = configureStore({
    reducer: rememberReducer(reducers),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        {persistWholeStore: true}
    )],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware)
})

export default store