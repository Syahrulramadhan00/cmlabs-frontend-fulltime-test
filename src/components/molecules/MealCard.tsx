import Image from 'next/image';
import Link from 'next/link';
import { MealPreview } from '@/core/types/meal';

interface MealCardProps {
  meal: MealPreview;
}

export const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Link 
      href={`/meals/${meal.idMeal}`} // Redirects to Meals Detail 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 grow flex items-center justify-center text-center">
        <h3 className="font-semibold text-gray-800 text-lg leading-tight">
          {meal.strMeal}
        </h3>
      </div>
    </Link>
  );
};