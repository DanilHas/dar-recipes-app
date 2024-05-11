import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { recipeApi } from "../services/recipeService";
import {
  setCuisine,
  setDifficulty,
  setFilterActive,
  setFilteredRecipes,
  setMealType,
} from "../store/reducers/FilterSlice";
import { Recipe } from "../models/Recipe";
import { setCurrentPage } from "../store/reducers/PaginationSlice";

export default function Filters() {
  const { data } = recipeApi.useGetAllRecipesQuery(50);
  const dispatch = useAppDispatch();
  const { cuisine, mealType, difficulty, isFilterActive } = useAppSelector(
    (state) => state.filter
  );

  const allRecipes = data?.recipes;
  const cuisines: string[] | undefined = allRecipes?.map(
    (recipe) => recipe.cuisine
  );
  const uniqueCuisine: string[] = Array.from(new Set(cuisines));

  const uniqueMealTypes = new Set<string>();

  allRecipes?.forEach((recipe) =>
    recipe.mealType.forEach((type) => uniqueMealTypes.add(type))
  );
  const uniqueMealTypesArr: string[] = Array.from(uniqueMealTypes);

  const filterRecipes = () => {
    if (!allRecipes) {
      return [];
    }
    let data: Recipe[] = allRecipes;
    if (cuisine !== "All countries and regions") {
      data = data?.filter((recipe) => recipe.cuisine === cuisine);
    }
    if (mealType !== "All types") {
      data = data?.filter((recipe) => recipe.mealType.includes(mealType));
    }
    if (difficulty !== "Any") {
      data = data?.filter((recipe) => recipe.difficulty === difficulty);
    }

    dispatch(setFilteredRecipes(data));
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.name === "cuisine") {
      dispatch(setCuisine(e.target.value));
      dispatch(setCurrentPage(1));
      dispatch(setFilterActive(true));
    } else if (e.target.name === "mealType") {
      dispatch(setMealType(e.target.value));
      dispatch(setCurrentPage(1));
      dispatch(setFilterActive(true));
    } else {
      const ariaLabelValue = e.target.getAttribute("aria-label");
      if (ariaLabelValue !== null) {
        dispatch(setDifficulty(ariaLabelValue));
        dispatch(setCurrentPage(1));
        dispatch(setFilterActive(true));
      }
    }
  };

  useEffect(() => {
    filterRecipes();
    if (
      cuisine === "All countries and regions" &&
      mealType === "All types" &&
      difficulty === "Any"
    ) {
      dispatch(setFilterActive(false));
    }
  }, [cuisine, mealType, difficulty]);

  const handleResetBtnClick = () => {
    dispatch(setCuisine("All countries and regions"));
    dispatch(setMealType("All types"));
    dispatch(setDifficulty("Any"));
    dispatch(setFilterActive(false));
  };

  return (
    <>
      <div className="flex mt-12 gap-x-3 items-center justify-end">
        <p className="filters-text">Cuisine:</p>
        <select
          className="filters-select"
          name="cuisine"
          onChange={handleChange}
          value={cuisine}
        >
          <option
            defaultValue="All countries and regions"
            className="filters-option"
          >
            All countries and regions
          </option>
          {uniqueCuisine.map(
            (cuisine): JSX.Element => (
              <option key={cuisine} className="filters-option">
                {cuisine}
              </option>
            )
          )}
        </select>
      </div>
      <div className="flex my-[17px] gap-x-3 items-center justify-end">
        <p className="filters-text">Meal type:</p>
        <select
          className="filters-select"
          name="mealType"
          onChange={handleChange}
          value={mealType}
        >
          <option defaultValue="All types" className="filters-option">
            All types
          </option>
          {uniqueMealTypesArr.map(
            (type): JSX.Element => (
              <option key={type} className="filters-option">
                {type}
              </option>
            )
          )}
        </select>
      </div>
      <div className="flex mb-[17px] gap-x-3 items-center justify-end">
        <p className="filters-text tablet:text-left">
          Difficulty of preparation:
        </p>
        <div className="join menu-vertical lg:menu-horizontal">
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Any"
            onChange={handleChange}
            checked={difficulty === "Any"}
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Easy"
            onChange={handleChange}
            checked={difficulty === "Easy"}
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Medium"
            onChange={handleChange}
            checked={difficulty === "Medium"}
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Hard"
            onChange={handleChange}
            checked={difficulty === "Hard"}
          />
        </div>
      </div>
      <button
        type="button"
        disabled={!isFilterActive}
        onClick={handleResetBtnClick}
        className="font-roboto text-sm leading-[22px] font-normal text-left text-blue
        transition-opacity ease-out duration-300 hover:opacity-80 disabled:opacity-60"
      >
        Reset all filters
      </button>
    </>
  );
}
