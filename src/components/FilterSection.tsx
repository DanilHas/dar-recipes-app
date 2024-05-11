import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import recipeBook from "../images/recipe-book.jpg";
import { Recipe } from "../models/Recipe";
import Filters from "./Filters";

export default function FilterSection() {
  const { filteredRecipes } = useAppSelector((state) => state.filter);
  const randomRecipe: Recipe =
    filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];

  return (
    <section
      className="p-6 mt-3 bg-white max-w-[24.5%] tablet:p-3
    tablet:max-w-[35%] xlarge:max-w-[30%]"
    >
      <img
        src={recipeBook}
        alt="Изображение книги рецептов"
        className="w-[369px] h-40 block object-cover object-center m-6 tablet:m-3 tablet:mx-0"
      />
      <p
        className="text-black font-roboto text-sm leading-[18px]
      font-normal text-left mx-6 tablet:mx-0"
      >
        In our lives, when time becomes an increasingly valuable resource, the
        task meal planning is becoming increasingly difficult.
      </p>
      <p
        className="text-black font-roboto text-sm leading-[18px]
      font-normal text-left mx-6 my-[18px] tablet:m-3 tablet:mx-0"
      >
        Often we are faced with a dilemma: what to cook for breakfast, lunch or
        dinner? How can we easily and quickly decide on the choice of dish and
        not spend a lot of time making this decision?
      </p>
      <p
        className="text-black font-roboto text-sm leading-[18px]
      font-normal text-left m-6 mt-0 tablet:m-3 tablet:mx-0"
      >
        Our service will help: choose the parameters - and go!
      </p>
      <Filters />
      <p className="mt-12 mb-6 text-black font-roboto text-base font-normal text-left">
        You can also taste luck
      </p>
      <Link
        to={randomRecipe ? `/recipes/${randomRecipe.id}` : "/"}
        className="luckyButton"
      >
        I'll be lucky!
      </Link>
    </section>
  );
}
