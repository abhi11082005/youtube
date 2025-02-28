import { useState } from "react";

const FloatingInput = ({type="email",text="Email",onChange,value}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-full max-w-md">
      {/* Input Field */}
      <input
        type={type}
        id={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        className="w-full p-3 pt-5 text-white bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />

      {/* Floating Label */}
      <label
        htmlFor="email"
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || value
            ? "top-1 text-xs text-blue-400"
            : "top-3 text-base text-gray-400"
        }`}
      >
        {text ? text : "Email or phone"}
      </label>
    </div>
  );
};

export default FloatingInput;