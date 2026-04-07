import { apiClient } from './axiosClient';
import { Ingredient, MealPreview } from '@/core/types/meal';

export const mealApi = {
  getIngredients: async (): Promise<Ingredient[]> => {
    const response = await apiClient.get('/list.php?i=list');
    return response.data.meals;
  },

  getMealsByIngredient: async (ingredientName: string): Promise<MealPreview[]> => {
    const response = await apiClient.get(`/filter.php?i=${ingredientName}`);
    return response.data.meals;
  },
  
  getMealDetails: async (mealId: string) => {
    const response = await apiClient.get(`/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  }
};