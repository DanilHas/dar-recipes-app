import { Recipe } from "../models/Recipe";
import CurrentRecipePagination from "./CurrentRecipePagination";
import InstructionStep from "./InstructionStep";
import RecipeCharacteristic from "./RecipeCharacteristic";

interface CurrentRecipeSectionProps {
  currentRecipe: Recipe;
}

export default function CurrentRecipeSection({
  currentRecipe,
}: CurrentRecipeSectionProps) {
  return (
    <section className="flex bg-white gap-x-3">
      <div className="grid h-[852px] gap-3 currentRecipeContainer">
        <RecipeCharacteristic
          title="Cuisine"
          text={currentRecipe.cuisine}
          style="font-normal"
          area="cuisine"
        />
        <RecipeCharacteristic
          title="Tags"
          text={`#${currentRecipe.tags.join(", #")}`}
          style="text-sm leading-[22px] text-opacityBlack font-normal"
          area="tags"
        />
        <RecipeCharacteristic
          title="Calories"
          text={`${currentRecipe.caloriesPerServing} kcal`}
          area="calories"
          style="font-normal"
          cals={true}
        />
        <RecipeCharacteristic
          title="Servings"
          text={currentRecipe.servings}
          style="text-xl font-bold"
          area="servings"
        />
        <RecipeCharacteristic
          title="Description"
          text={currentRecipe.instructions.join(" ")}
          style="font-normal text-sm leading-4 text-opacityBlack"
          area="description"
        />
        <RecipeCharacteristic
          title="Total cooking time"
          text={currentRecipe.cookTimeMinutes + currentRecipe.prepTimeMinutes}
          style="font-normal"
          area="prepTime"
        />
        <div className="pt-4" style={{ gridArea: "instructions" }}>
          <h2
            className="pb-4 shadow-characteristicTitle font-roboto text-base
            font-medium text-left text-customBlack px-6"
          >
            Cooking instructions
          </h2>
          <ul className="px-[30px] mt-6">
            {currentRecipe.instructions.map((step: string) => (
              <InstructionStep step={step} key={step} />
            ))}
          </ul>
        </div>
      </div>
      <CurrentRecipePagination currentRecipe={currentRecipe} />
    </section>
  );
}
