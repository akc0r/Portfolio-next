import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#05070f] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 text-white shadow-[0_14px_30px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-300 hover:shadow-[0_18px_34px_rgba(249,115,22,0.42)] dark:shadow-[0_16px_34px_rgba(249,115,22,0.35)]",
        outline:
          "surface-chip text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:shadow-[0_10px_18px_rgba(15,23,42,0.12)] dark:text-slate-100 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80",
        ghost:
          "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-200/90 dark:hover:bg-slate-800/70 dark:hover:text-white",
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
  },
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
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
