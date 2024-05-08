import { Recipe } from "../models/Recipe";
import timerIcon from "../images/timer-icon.svg";
import blackStarIcon from "../images/black-star-icon.svg";
import whiteStarIcon from "../images/white-star-icon.svg";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <li
      className="grid grid-cols-2 box-border bg-white border border-solid
     border-gray94 rounded-sm w-full max-h-[354px]"
    >
      <div>
        <h3
          className="font-roboto text-base leading-4 font-medium
         text-left max-w-[178px] mx-6 my-[14px]"
        >
          {recipe.name}
        </h3>
        <img
          src={recipe.image}
          alt="Изображение блюда"
          className="h-[294px] max-w-[226px] object-center object-cover"
        />
      </div>
      <div className="m-6">
        <p className="font-roboto text-[10px] leading-3 font-normal text-left text-opacityBlack">
          {recipe.instructions.join(" ")}
        </p>
        <div className="my-2 flex gap-x-1.5">
          <img src={timerIcon} alt="Изображение таймера" />
          <p className="cardText">
            {recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes
          </p>
        </div>
        <div className="flex gap-x-2">
          <p className="cardText">Difficulty:</p>
          {recipe.difficulty === "Easy" && (
            <div className="difficultyStarContainer">
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
              <img src={whiteStarIcon} alt="Незакрашенная звездочка" />
              <img src={whiteStarIcon} alt="Незакрашенная звездочка" />
            </div>
          )}
          {recipe.difficulty === "Medium" && (
            <div className="difficultyStarContainer">
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
              <img src={whiteStarIcon} alt="Незакрашенная звездочка" />
            </div>
          )}
          {recipe.difficulty === "Hard" && (
            <div className="difficultyStarContainer">
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
              <img src={blackStarIcon} alt="Закрашенная звездочка" />
            </div>
          )}
        </div>
        <p className="my-2 cardText">{recipe.cuisine} cuisine</p>
        <p className="cardText">{recipe.mealType.join(", ")}</p>
      </div>
    </li>
  );
}
