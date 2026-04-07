"use client";

import { use } from "react";
import Image from "next/image";

import { useMealDetails } from "@/hooks/queries/useMeal";
import { PageHeader } from "@/components/molecules/PageHeader";
import { extractIngredients, getYouTubeEmbedUrl } from "@/utils/mealFormatters";

export default function MealDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: meal, isLoading, isError } = useMealDetails(id);

  if (isLoading) return <div className="text-center mt-20">Loading meal details...</div>;
  if (isError || !meal) return <div className="text-center mt-20 text-red-500">Meal not found.</div>;

  const ingredients = extractIngredients(meal);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(meal.strYoutube);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <PageHeader
        title={meal.strMeal}
        onBackClick={() => window.history.back()}
        backLabel="Back to Meals"
      />

      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recipes</h2>
            <ul className="space-y-2">
              {ingredients.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Instructions
            </h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {meal.strInstructions}
            </div>
          </div>

          {youtubeEmbedUrl && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tutorials
              </h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src={youtubeEmbedUrl}
                  title={`${meal.strMeal} Tutorial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}