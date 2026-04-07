"use client";

import { useState, use } from "react";

import { MealCard } from "@/components/molecules/MealCard";
import { useMealsByIngredient } from "@/hooks/queries/useMeal";
import { SearchBar } from "@/components/molecules/SearchBar";
import { SearchX } from "lucide-react";
import { SearchEmptyState } from "@/components/molecules/SearchEmptyState";
import { PageHeader } from "@/components/molecules/PageHeader";

export default function IngredientDetailPage({
  params,
}: {
  params: Promise<{ ingredient: string }>;
}) {
  const unwrappedParams = use(params);

  const decodedIngredient = decodeURIComponent(unwrappedParams.ingredient);

  const {
    data: meals,
    isLoading,
    isError,
  } = useMealsByIngredient(decodedIngredient);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  if (isLoading)
    return <div className="text-center mt-20">Loading meals...</div>;
  if (isError)
    return (
      <div className="text-center mt-20 text-red-500">
        Failed to load meals.
      </div>
    );

  const filteredMeals =
    meals?.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title={`${decodedIngredient} Meals`}
          backHref="/"
          backLabel="Back to Ingredients"
        />

        <SearchBar
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-fit"
          placeholder="Search meals..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {filteredMeals.length === 0 && (
        <SearchEmptyState
          searchTerm={searchTerm}
          itemName="meals"
          icon={SearchX}
        />
      )}
    </div>
  );
}
