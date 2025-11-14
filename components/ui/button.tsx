import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-orange-500 text-white shadow-[0_12px_30px_rgba(249,115,22,0.45)] hover:bg-orange-400 dark:shadow-[0_12px_30px_rgba(249,115,22,0.45)]",
        outline:
          "border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white",
        ghost:
          "text-slate-700 hover:text-slate-900 dark:text-white/80 dark:hover:text-white",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
