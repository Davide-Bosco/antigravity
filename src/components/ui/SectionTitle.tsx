import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, className, dark }: SectionTitleProps) {
  return (
    <div className={cn("mb-14", centered && "text-center max-w-3xl mx-auto", className)}>
      <h2 className={cn(
        "text-3xl font-black tracking-tight md:text-5xl leading-tight",
        dark === true ? "text-white" : dark === false ? "text-[#0A0A0A]" : "text-inherit"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-base sm:text-lg leading-relaxed font-normal opacity-75",
          dark === true ? "text-white/70" : dark === false ? "text-[#0A0A0A]/70" : "text-inherit"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
