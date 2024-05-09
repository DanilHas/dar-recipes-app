import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../services/recipeService";
import paginationReducer from "./reducers/PaginationSlice";
import filterReducer from "./reducers/FilterSlice";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    pagination: paginationReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
