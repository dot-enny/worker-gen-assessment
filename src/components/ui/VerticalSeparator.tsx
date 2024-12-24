export const VerticalSeparator = ({ className } : { className?: string }) => {
    return (
      <div aria-hidden="true" className={`h-6 w-px bg-gray-400 ${className}`} />
    )
  };