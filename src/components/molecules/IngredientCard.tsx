import Image from 'next/image';
import Link from 'next/link';
import { Ingredient } from '@/core/types/meal';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export const IngredientCard = ({ ingredient }: IngredientCardProps) => {
  // TheMealDB standard URL for ingredient images
  const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;

  return (
    <Link
      href={`/ingredients/${ingredient.strIngredient}`} // Redirect to Ingredients Detail [cite: 34-35]
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col items-center p-4"
    >
      <div className="relative w-24 h-24 mb-3 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
        <Image
          src={imageUrl}
          alt={ingredient.strIngredient}
          fill
          sizes="96px"
          className="object-contain"
        />
      </div>
      <span className="font-semibold text-gray-700 text-center">
        {ingredient.strIngredient}
      </span>
    </Link>
  );
};