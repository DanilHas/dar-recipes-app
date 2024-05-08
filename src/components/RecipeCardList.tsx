import { Recipe } from "../models/Recipe";
import RecipeCard from "./RecipeCard";

interface RecipeCardListProps {
  paginatedRecipes: Recipe[] | undefined;
}

export default function RecipeCardList({
  paginatedRecipes,
}: RecipeCardListProps) {
  return (
    <ul className="recipeCardList">
      {paginatedRecipes &&
        paginatedRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
    </ul>
  );
}
