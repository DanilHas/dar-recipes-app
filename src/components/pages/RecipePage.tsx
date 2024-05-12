import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Recipe } from "../../models/Recipe";
import buttonArrow from "../../images/button-arrow.svg";
import CurrentRecipeSection from "../CurrentRecipeSection";
import { useEffect, useState } from "react";
import { recipeApi } from "../../services/recipeService";

export default function RecipePage() {
  const { recipeId } = useParams<string>();
  const { filteredRecipes } = useAppSelector((state) => state.filter);
  const currentRecipe: Recipe | undefined = filteredRecipes.find(
    (recipe) => recipe.id === Number(recipeId)
  );
  const { isLoading, error } = recipeApi.useGetAllRecipesQuery(50);
  const navigate = useNavigate();
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (filteredRecipes && !isLoading && !error) {
      setDataLoaded(true);
    }
  }, [filteredRecipes, isLoading, error]);

  useEffect(() => {
    if (isDataLoaded && !currentRecipe) {
      navigate("*");
    }
  }, [currentRecipe, isDataLoaded, navigate]);

  return (
    <>
      <header className="flex gap-x-4 py-4 px-6 bg-white items-center mb-3">
        <Link to={"/"} className="w-4 h-4 navButton">
          <img
            src={buttonArrow}
            alt="стрелка назад"
            className="object-center object-cover"
          />
        </Link>
        <h1 className="font-roboto text-2xl leading-7 font-medium text-left text-customBlack">
          {currentRecipe?.name}
        </h1>
      </header>
      <main>
        {currentRecipe && (
          <CurrentRecipeSection currentRecipe={currentRecipe} />
        )}
      </main>
    </>
  );
}
