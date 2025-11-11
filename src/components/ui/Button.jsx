import React from "react";
import { forwardRef } from "react";
import { cn } from "../lib/utils";

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "sm",
      className,
      type = "button",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "rounded-2xl px-4 py-2 bg-(--federal-blue) border-2 border-black text-white transition-all duration-500 hover:text-(--light-cyan) cursor-pointer hover:-translate-y-1 hover:bg-(--blue-green) hover:border-2 hover:border-black hover:cursor-pointer ",

      secundary: "rounded-2xl bg-(--light-cyan) text-(--federal-blue) font-bold border-2 border-white cursor-pointer transition-all duration-500 hover:text-(--light-cyan) hover:-translate-y-1 hover:bg-(--blue-green) hover:border-2 hover:cursor-pointer ",

      new: "px-4 py-2 bg-green-200  rounded-2xl cursor-pointer shadow-xl border-2 border-green-800 font-bold transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:bg-green-700 ", 

      change: "px-4 py-2 bg-white border-2 border-black rounded-2xl cursor-pointer font-bold transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:border-gray-100 hover:border-2 hover:bg-(--federal-blue) ",

      close: "p-4 cursor-pointer",

      edit: "p-1 bg-white flex justify-center items-center rounded-lg cursor-pointer border-2 transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:border-gray-100 hover:border-2 hover:bg-(--federal-blue) "
    };

    const sizes = {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-3",
    };

    return (
      <button
        className={cn(className) + " " + variants[variant] + " " + sizes[size]}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
