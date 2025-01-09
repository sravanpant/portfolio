import { cn } from "@/lib/utils";

// components/ui/section.tsx
export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <section className={cn("py-20 relative overflow-hidden", className)}>
        {children}
      </section>
    )
  }
  
  export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={cn("container mx-auto px-4", className)}>
        {children}
      </div>
    )
  }