import { ArchiveX, LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface SearchEmptyStateProps {
  searchTerm?: string;
  itemName?: string; 
  message?: string;  
  icon?: LucideIcon; 
  className?: string;
}

export const SearchEmptyState = ({
  searchTerm,
  itemName = 'items',
  message,
  icon: Icon = ArchiveX,
  className,
}: SearchEmptyStateProps) => {
  return (
    <div className={twMerge("flex flex-col items-center justify-center text-center text-gray-500 mt-10 p-6", className)}>
      <Icon className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-lg">
        {message ? (
          message
        ) : searchTerm ? (
          <>
            No {itemName} <span /> found matching &quot;
            <span className="font-semibold text-gray-700">{searchTerm}</span>
            &quot;.
          </>
        ) : (
          <>No {itemName} found.</>
        )}
      </p>
    </div>
  );
};