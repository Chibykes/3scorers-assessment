import { ChangeEventHandler, FocusEventHandler } from "react";

type InputTypes = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | undefined;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error: any;
};

export default function Input({ label, error, ...props }: InputTypes) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold" htmlFor={props.name}>
        {label}
      </label>
      <div
        className={`
                border border-black rounded-lg overflow-hidden
                ring-2 ring-offset-0 focus-within:ring-black
                ${
                  error
                    ? "ring-red-500"
                    : "ring-transparent"
                }
            `}
      >
        <input className="block w-full p-3 focus:outline-none" {...props} />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}