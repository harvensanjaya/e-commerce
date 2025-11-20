import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  message: string | null;
  visible: boolean;
}

const initialState: ModalState = {
  message: null,
  visible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.visible = true;
      state.message = action.payload;
    },
    hideModal: (state) => {
      state.visible = false;
      state.message = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
