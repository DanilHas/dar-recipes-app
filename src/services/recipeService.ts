import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RecipeQueryData } from "../models/RecipeQueryData";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query<RecipeQueryData, number>({
      query: (limit: number) => ({
        url: "/recipes",
        params: {
          limit,
        },
      }),
    }),
  }),
});
