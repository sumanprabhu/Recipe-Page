import type { Recipe } from "../../types";
import "./RecipeModal.css";

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{recipe.name}</h2>
        <img src={recipe.image} width="200" />

        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <p>
          <strong>Prep:</strong> {recipe.prepTimeMinutes} mins
        </p>
        <p>
          <strong>Cook:</strong> {recipe.cookTimeMinutes} mins
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>
    </div>
  );
}
