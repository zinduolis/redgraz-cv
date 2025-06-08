import { FC, memo } from 'react';

const LoadingSpinner: FC = memo(() => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-lime-400 border-opacity-60"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';
export default LoadingSpinner;
