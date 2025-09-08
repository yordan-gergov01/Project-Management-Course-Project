import { ButtonProps } from "../types/interfaces";

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover: hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
