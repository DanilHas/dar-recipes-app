import { useAppSelector } from "../hooks/redux";
import { Recipe } from "../models/Recipe";
import Pagination from "./Pagination";
import RecipeCardList from "./RecipeCardList";

export default function RecipesSection() {
  const { currentPage, recipesPerPage } = useAppSelector(
    (state) => state.pagination
  );
  const { filteredRecipes } = useAppSelector((state) => state.filter);

  const lastRecipeIndex: number = currentPage * recipesPerPage;
  const firstRecipeIndex: number = lastRecipeIndex - recipesPerPage;
  const paginatedRecipes: Recipe[] = filteredRecipes.slice(
    firstRecipeIndex,
    lastRecipeIndex
  );

  return (
    <section className="mt-3 ml-3 mr-3.5 w-full bg-customWhite pl-3">
      <div className="flex py-4 px-6 bg-white gap-x-3">
        <h2 className="font-roboto text-customBlack text-xl leading-6 font-medium text-left">
          Recipes found
        </h2>
        <p className="font-roboto text-opacityBlack text-sm leading-[22px] font-normal text-left">
          {filteredRecipes.length}
        </p>
      </div>
      <RecipeCardList paginatedRecipes={paginatedRecipes} />
      <Pagination />
      {filteredRecipes.length === 0 && (
        <p className="text-center mt-4 text-customBlack font-roboto text-2xl font-bold">
          No recipes were found for your request. Please change your request!
        </p>
      )}
    </section>
  );
}
