// components/ui/Button.tsx
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export default function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  if (variant === "outline") {
    return (
      <button
        className={cn(
          // outer
          "p-[1px] rounded-md",
          "border border-blue-200",
          "transition-all duration-300",
          "group", // 👈 important for inner hover sync
          className
        )}
        {...props}
      >
        <span
          className="
          flex items-center justify-center gap-2
          px-6 py-2 text-base font-medium whitespace-nowrap
          rounded-[6px] 

          bg-[linear-gradient(40deg,#fff_40%,#bed8ff)]
          bg-[length:200%_200%] bg-left

          group-hover:bg-right
          transition-all duration-300
        "
        >
          {/* text layer */}
          <span className="text-gradient-primary inline-block text-sm font-medium">
            {children}
          </span>
        </span>
      </button>
    );
  }
  // ✅ DEFAULT BUTTON
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2",
        "px-6 py-3 text-base font-medium whitespace-nowrap",
        "rounded-md transition-all duration-300",
        // "text-white",

        "bg-[#001aff]",
        "bg-[image:linear-gradient(71deg,#001aff,#02059d_57%,#030e4d)]",
        "bg-[length:200%_200%] bg-left hover:bg-right",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}