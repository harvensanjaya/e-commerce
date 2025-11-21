import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface WishlistState {
    items: Product[]
}

const initialState: WishlistState = {
    items: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const exists = state.items.find((i) => i.id === action.payload.id)

            if (!exists) {
                state.items.push(action.payload)
            }
        },

        removeWishlist: (state,action ) => {
            state.items = state.items.filter((i) => i.id !== action.payload.id)
        },

        toggleWishlist: (state, action) => {
            const exists = state.items.find((i) => i.id === action.payload.id)

            if (exists) {
                state.items = state.items.filter((i) => i.id !== action.payload.id)
            } else {
                state.items.push(action.payload)
            }
        }
    }
})

export const { addToWishlist, removeWishlist, toggleWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer