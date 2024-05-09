import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../../models/Recipe";

interface FilterState {
  cuisine: string;
  mealType: string;
  difficulty: string;
  filteredRecipes: Recipe[];
}

const initialState: FilterState = {
  cuisine: "All countries and regions",
  mealType: "All types",
  difficulty: "Any",
  filteredRecipes: [],
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
  },
});

export const { setFilteredRecipes, setCuisine, setMealType, setDifficulty } =
  filterSlice.actions;
export default filterSlice.reducer;
