import { Recipe } from "./Recipe";

export interface RecipeQueryData {
  limit: number;
  recipes: Recipe[];
  total: number;
}
