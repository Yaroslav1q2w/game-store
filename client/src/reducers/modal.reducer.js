import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
	name: "modal",
	initialState: {
		isModal: false,
		pageForm: false,
	},
	reducers: {
		modalOpen(state) {
			state.isModal = true;
		},
		modalClose(state) {
			state.isModal = false;
		},
		formOpen(state) {
			state.pageForm = true;
		},
		formClose(state) {
			state.pageForm = false;
		},
	},
});

export const {
	modalOpen,
	modalClose,
	formOpen,
	formClose,
	modalSubmitOpen,
	modalSubmitClose,
} = modalSlice.actions;
export default modalSlice.reducer;
