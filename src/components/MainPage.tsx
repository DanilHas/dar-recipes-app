import { useEffect } from "react";
import FilterSection from "./FilterSection";
import Header from "./Header";
import RecipesSection from "./RecipesSection";
import { useAppDispatch } from "../hooks/redux";
import { recipeApi } from "../services/recipeService";
import { setFilteredRecipes } from "../store/reducers/FilterSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { data } = recipeApi.useGetAllRecipesQuery(50);
  const allRecipes = data?.recipes;

  useEffect(() => {
    if (allRecipes) {
      dispatch(setFilteredRecipes(allRecipes));
    }
  }, [allRecipes]);

  return (
    <>
      <Header />
      <main className="flex">
        <FilterSection />
        <RecipesSection />
      </main>
    </>
  );
}
