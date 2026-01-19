import type { Recipe } from "../../types";
import "./RecipeCard.css";

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onSelect }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <img src={recipe.image} width={150} height={150} />
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Meal: {recipe.mealType.join(", ")}</p>
      <button onClick={() => onSelect(recipe)}>Recipe</button>
    </div>
  );
}
