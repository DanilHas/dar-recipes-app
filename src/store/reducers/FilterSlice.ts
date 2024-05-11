import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../../models/Recipe";

interface FilterState {
  cuisine: string;
  mealType: string;
  difficulty: string;
  filteredRecipes: Recipe[];
  isFilterActive: boolean;
}

const initialState: FilterState = {
  cuisine: "All countries and regions",
  mealType: "All types",
  difficulty: "Any",
  filteredRecipes: [],
  isFilterActive: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilteredRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.filteredRecipes = action.payload;
    },
    setCuisine: (state, action: PayloadAction<string>) => {
      state.cuisine = action.payload;
    },
    setMealType: (state, action: PayloadAction<string>) => {
      state.mealType = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    setFilterActive: (state, action: PayloadAction<boolean>) => {
      state.isFilterActive = action.payload;
    },
  },
});

export const {
  setFilteredRecipes,
  setCuisine,
  setMealType,
  setDifficulty,
  setFilterActive,
} = filterSlice.actions;
export default filterSlice.reducer;
