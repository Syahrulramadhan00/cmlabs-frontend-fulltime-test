import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface PageHeaderProps {
  title: string;
  backHref?: string;
  backLabel?: string;
  onBackClick?: () => void; // Useful if we want to use window.history.back() instead of a strict URL
  className?: string;
}

export const PageHeader = ({
  title,
  backHref,
  backLabel = 'Back',
  onBackClick,
  className,
}: PageHeaderProps) => {
  return (
    <div className={twMerge('flex flex-col', className)}>
      {/* Render a Button if onBackClick is provided, 
        Otherwise render a Link if backHref is provided 
      */}
      {onBackClick ? (
        <button
          onClick={onBackClick}
          className="group flex w-fit items-center text-sm text-blue-500 hover:text-blue-600 mb-3 transition-colors outline-none"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          {backLabel}
        </button>
      ) : backHref ? (
        <Link
          href={backHref}
          className="group flex w-fit items-center text-sm text-blue-500 hover:text-blue-600 mb-3 transition-colors outline-none"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          {backLabel}
        </Link>
      ) : null}

      <h1 className="text-3xl font-bold text-gray-800 capitalize">
        {title}
      </h1>
    </div>
  );
};