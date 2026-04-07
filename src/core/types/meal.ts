export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}

export interface MealPreview {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealDetail extends MealPreview {
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
  strTags: string | null;
  [key: string]: string | null | undefined; 
}