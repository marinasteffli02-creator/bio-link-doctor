import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const LinkButton = ({ href, children, icon, className, variant = "primary" }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-medium transition-all duration-300",
        variant === "primary" && "bg-primary text-primary-foreground shadow-button hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        variant === "secondary" && "bg-card text-card-foreground border border-border shadow-soft hover:bg-secondary hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </a>
  );
};

export default LinkButton;
