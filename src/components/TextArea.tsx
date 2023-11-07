import React from "react";

interface InputInterface {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  inputError: string;
}

const TextArea = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  inputError,
}: InputInterface) => {
  return (
    <div className="grid mb-4">
      <label htmlFor="email" className="mb-1">
        {label}:
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="border p-2 rounded-md text-xl border-[#50dffb]"
        value={value}
        onChange={onChange}
      />
      {inputError && <p className="text-red-500 text-sm">{inputError}</p>}
    </div>
  );
};

export default TextArea;
