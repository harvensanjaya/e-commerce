import { configureStore } from '@reduxjs/toolkit'
import productReducer  from './product/productSlice'
import authReducer from './auth/authSlice'
import modalReducer from './auth/modalSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
        modal: modalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch