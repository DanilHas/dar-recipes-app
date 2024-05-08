export interface Recipe {
  id: number;
  caloriesPerServing: number;
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  image: string;
  name: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  tags: string[];
}
