import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../configs/API";

const initialState = {
	authData: null,
	status: "loading",
	error: null,
};

export const fetchAuthData = createAsyncThunk(
	"auth/fetchAuthData",
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(`${API_URL}/api/login/`, params);

			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const authReducer = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearDataAuth(state) {
			localStorage.removeItem("authData");
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthData.pending, (state) => {
			state.status = "loading";
			state.authData = null;
		});
		builder.addCase(fetchAuthData.fulfilled, (state, { payload }) => {
			state.status = "leaded";
			state.authData = payload;
			state.error = null;
			localStorage.setItem("authData", JSON.stringify(payload));
		});
		builder.addCase(fetchAuthData.rejected, (state, { payload }) => {
			state.status = "error";
			state.error = payload;
		});
	},
});

export const { clearDataAuth } = authReducer.actions;
export default authReducer.reducer;
