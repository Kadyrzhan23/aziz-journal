import { configureStore } from "@reduxjs/toolkit";
import post from './slices/postSlice'
import service from './slices/service.js'
import { postsApi } from './RTK/postsApi.js'
export const store = configureStore({
    reducer:{
        [postsApi.reducerPath] : postsApi.reducer,
        post,
        service
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware() // Включаем стандартные middleware
      .concat(postsApi.middleware) // RTK Query middleware для postApi
})