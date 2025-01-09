// components/ui/glass-card.tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`
        backdrop-blur-[12px]
        bg-white/[0.4] dark:bg-gray-900/[0.6]
        border border-white/20 dark:border-blue-500/20
        shadow-lg shadow-black/5 dark:shadow-blue-500/10
        rounded-xl
        hover:border-white/30 dark:hover:border-blue-500/30
        hover:bg-white/[0.6] dark:hover:bg-gray-900/[0.8]
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
};
