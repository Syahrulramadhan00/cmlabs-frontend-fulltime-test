import { Search } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string; 
  inputClassName?: string; 
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = 'Search...',
  className,
  inputClassName
}: SearchBarProps) => {
  return (

    <div className={twMerge("relative w-full", className)}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(
          "w-full text-black pl-11 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow",
          inputClassName
        )}
      />
    </div>
  );
};