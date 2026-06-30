import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "cyan" | "red";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider",
        variant === "default" && "bg-white/10 text-white border border-white/10",
        variant === "outline" && "border border-white/20 text-white/80",
        (variant === "cyan" || variant === "red") && "bg-[#E8001D]/15 text-[#FF3344] border border-[#E8001D]/30 shadow-[0_0_12px_rgba(232,0,29,0.25)]",
        className
      )}
    >
      {children}
    </span>
  );
}
