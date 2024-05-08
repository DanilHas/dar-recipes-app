import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  recipesPerPage: number;
  totalPages: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  recipesPerPage: 6,
  totalPages: 1,
};

export const paginationSLice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { setCurrentPage, setTotalPages, prevPage, nextPage } =
  paginationSLice.actions;
export default paginationSLice.reducer;
