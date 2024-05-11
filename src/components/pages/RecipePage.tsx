import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Recipe } from "../../models/Recipe";
import buttonArrow from "../../images/button-arrow.svg";
import CurrentRecipeSection from "../CurrentRecipeSection";

export default function RecipePage() {
  const { recipeId } = useParams<string>();
  const { filteredRecipes } = useAppSelector((state) => state.filter);
  const currentRecipe: Recipe | undefined = filteredRecipes.find(
    (recipe) => recipe.id === Number(recipeId)
  );

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
