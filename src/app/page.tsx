"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { SearchBar } from "@/components/molecules/SearchBar";
import { IngredientCard } from "@/components/molecules/IngredientCard";
import { useIngredients } from "@/hooks/queries/useMeal";
import { SearchEmptyState } from "@/components/molecules/SearchEmptyState";

export default function IngredientsPage() {
  const { data: ingredients, isLoading, isError } = useIngredients();
  const [searchTerm, setSearchTerm] = useState("");

  const [visibleCount, setVisibleCount] = useState(15);
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleCount(15);
  };

  const filteredIngredients = useMemo(() => {
    return (
      ingredients?.filter((ingredient) =>
        ingredient.strIngredient
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      ) || []
    );
  }, [ingredients, searchTerm]);

  const visibleIngredients = filteredIngredients.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (
          target.isIntersecting &&
          visibleCount < filteredIngredients.length
        ) {
          setVisibleCount((prev) => prev + 15);
        }
      },
      { threshold: 0.1 },
    );

    const loaderNode = loaderRef.current;

    if (loaderNode) {
      observer.observe(loaderNode);
    }

    return () => {
      if (loaderNode) observer.unobserve(loaderNode);
    };
  }, [visibleCount, filteredIngredients.length]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Loading delicious ingredients...
        </p>
      </div>
    );
  }

  if (isError)
    return (
      <div className="text-center mt-20 text-red-500">
        Failed to load ingredients.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          See All The Delicious Foods
        </h1>
        <p className="text-gray-500 font-medium">mealapp API website</p>
      </div>

      <div className="mb-12 max-w-md mx-auto">
        <SearchBar
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search ingredients..."
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {visibleIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.idIngredient}
            ingredient={ingredient}
          />
        ))}
      </div>

      {visibleCount < filteredIngredients.length && (
        <div ref={loaderRef} className="w-full flex justify-center py-10 mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
        </div>
      )}

      {filteredIngredients.length === 0 && (
        <SearchEmptyState searchTerm={searchTerm} itemName="ingredients" />
      )}
    </div>
  );
}
