import { CgSpinnerTwo } from "react-icons/cg";

type ButtonTypes = {
  loading: boolean;
  type: "button" | "reset" | "submit" | undefined;
  value: string | undefined;
  disabled: boolean | undefined;
};

export default function Button({ loading, ...props }: ButtonTypes) {
  return (
    <button
      className={`
        block w-full font-bold text-white bg-[--primary-color] p-3
        rounded-lg min-h-[48px]
        ${props.disabled && "opacity-60"}
      `}
      {...props}
    >
      {loading ? (
        <CgSpinnerTwo className="text-md mx-auto animate-spin" />
      ) : (
        "Sign Up"
      )}
    </button>
  );
}
