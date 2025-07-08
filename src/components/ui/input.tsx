import * as React from "react"
import { cn } from "../../lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 border-[#150A05]/20 bg-white px-6 py-4 text-base font-poppins transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#150A05] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B16631] focus-visible:border-[#B16631] hover:border-[#150A05]/40 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm focus:shadow-lg",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
