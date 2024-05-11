import { useAppSelector } from "../hooks/redux";
import { Recipe } from "../models/Recipe";
import { recipeApi } from "../services/recipeService";
import Pagination from "./Pagination";
import RecipeCardList from "./RecipeCardList";

export default function RecipesSection() {
  const { currentPage, recipesPerPage } = useAppSelector(
    (state) => state.pagination
  );
  const { filteredRecipes } = useAppSelector((state) => state.filter);
  const { error, isLoading } = recipeApi.useGetAllRecipesQuery(50);

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
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Sorry! An error has occurred. Please try again later!</span>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <span className="loading loading-spinner w-16"></span>
        </div>
      )}
      <RecipeCardList paginatedRecipes={paginatedRecipes} />
      <Pagination />
      {filteredRecipes.length === 0 && !isLoading && !error && (
        <p className="text-center mt-4 text-customBlack font-roboto text-2xl font-bold">
          No recipes were found for your request. Please change your request!
        </p>
      )}
    </section>
  );
}
