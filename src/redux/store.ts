import { configureStore } from '@reduxjs/toolkit'
import productReducer  from './product/productSlice'
import authReducer from './auth/authSlice'
import modalReducer from './auth/modalSlice'
import wishlistReducer from './wishlist/wishlistSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
        modal: modalReducer,
        wishlist: wishlistReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch