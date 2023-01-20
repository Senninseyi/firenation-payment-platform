import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: false,
};

const ModalReducer = createSlice({
  name: "modalSlice",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => {
      state.modals = true;
    },
    hideModal: (state, action) => {
      state.modals = false;
    },
  },
});

export const { showModal, hideModal } = ModalReducer.actions;
export default ModalReducer.reducer;
