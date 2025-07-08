import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#150A05] text-white hover:bg-[#2a1810] active:bg-[#0f0703] shadow-md hover:shadow-lg transition-all duration-200 font-poppins font-medium tracking-wide border border-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-[#150A05] bg-transparent text-[#150A05] hover:bg-[#150A05] hover:text-white active:bg-[#2a1810] active:border-[#2a1810] transition-all duration-200 font-poppins font-medium tracking-wide shadow-sm hover:shadow-md",
        secondary:
          "bg-[#B16631] text-white hover:bg-[#8F4F26] shadow-lg hover:shadow-xl transition-all duration-300 font-poppins font-medium tracking-wide",
        ghost:
          "hover:bg-[#150A05]/10 hover:text-[#150A05] font-poppins transition-all duration-200",
        link: "text-[#B16631] underline-offset-4 hover:underline font-poppins hover:text-[#8F4F26] transition-colors duration-200",
        premium:
          "bg-[#B16631] text-white hover:bg-[#D4822A] active:bg-[#8F4F26] shadow-lg hover:shadow-xl transition-all duration-200 font-poppins font-semibold tracking-wide border border-[#B16631]/30 hover:border-[#D4822A]/50 ring-2 ring-[#B16631]/20 hover:ring-[#D4822A]/30",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1DA851] shadow-lg hover:shadow-xl transition-all duration-300 font-poppins font-medium tracking-wide",
        subtle:
          "bg-[#150A05]/5 text-[#150A05] hover:bg-[#150A05]/10 border border-[#150A05]/20 hover:border-[#150A05]/40 transition-all duration-300 font-poppins",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-lg",
        xl: "h-14 rounded-lg px-10 text-xl",
        icon: "h-10 w-10",
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
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
