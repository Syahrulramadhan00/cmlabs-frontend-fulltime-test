import { useQuery } from '@tanstack/react-query';
import { mealApi } from '@/data/api/mealRepositories';

export const useIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: mealApi.getIngredients,
  });
};

export const useMealsByIngredient = (ingredientName: string) => {
  return useQuery({
    queryKey: ['mealsByIngredient', ingredientName], 
    queryFn: () => mealApi.getMealsByIngredient(ingredientName),
    enabled: !!ingredientName, 
  });
};

export const useMealDetails = (mealId: string) => {
  return useQuery({
    queryKey: ['mealDetails', mealId],
    queryFn: () => mealApi.getMealDetails(mealId),
    enabled: !!mealId, 
  });
};