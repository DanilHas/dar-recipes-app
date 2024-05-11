import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { Recipe } from "../models/Recipe";

interface CurrentRecipePaginationProps {
  currentRecipe: Recipe;
}

export default function CurrentRecipePagination({
  currentRecipe,
}: CurrentRecipePaginationProps) {
  const { filteredRecipes } = useAppSelector((state) => state.filter);

  const currentRecipeIndex: number = filteredRecipes.indexOf(currentRecipe);
  const nextRecipe: Recipe = filteredRecipes[currentRecipeIndex + 1];
  const prevRecipe: Recipe = filteredRecipes[currentRecipeIndex - 1];
  const firstRecipeIndex = currentRecipeIndex === 0;
  const lastRecipeIndex = currentRecipeIndex === filteredRecipes.length - 1;

  const handleLinkCLick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (firstRecipeIndex && e.currentTarget.id === "prevBtn") {
      e.preventDefault();
    }
    if (lastRecipeIndex && e.currentTarget.id === "nextBtn") {
      e.preventDefault();
    }
  };

  return (
    <div className="p-3">
      <img
        src={currentRecipe.image}
        alt="Изображение блюда"
        className="w-[918px] max-h-[760px] object-cover object-center"
      />
      <div className="mt-3 flex gap-x-2 justify-center py-3">
        <Link
          to={
            firstRecipeIndex
              ? `/recipes/${currentRecipe.id}`
              : `/recipes/${prevRecipe.id}`
          }
          className={`join-item btn paginationButton ${
            firstRecipeIndex ? "disabledPaginationButton" : ""
          }`}
          onClick={handleLinkCLick}
          id="prevBtn"
        >
          «
        </Link>
        <Link
          to={
            lastRecipeIndex
              ? `/recipes/${currentRecipe.id}`
              : `/recipes/${nextRecipe.id}`
          }
          className={`join-item btn paginationButton ${
            lastRecipeIndex ? "disabledPaginationButton" : ""
          }`}
          onClick={handleLinkCLick}
          id="nextBtn"
        >
          »
        </Link>
      </div>
    </div>
  );
}
