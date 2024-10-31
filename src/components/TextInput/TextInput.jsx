/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "@mui/material";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  type,
  maxLength = 50,
  checked,
  className,
  disabled,
  max,
  isDarkMode,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { value, type } = event.target;
    if (value.length <= maxLength) {
      if (onChange) {
        onChange(event);
      }
    }
  };

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    setIsFocused(false);
  };

  const handleKeyDown = (e) => {
    if (type === "number") {
      const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
      const key = e.key;

      if (!allowedKeys.includes(e.code) && isNaN(Number(key)) && key !== " ") {
        e.preventDefault();
      }
    }
  };

  const handleWheel = (event) => {
    if (event.target.type === "number") {
      event.target.blur(); // temporarily removes focus from the input to prevent the scroll effect
      setTimeout(() => event.target.focus(), 0); // re-focus the input after preventing the scroll
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col flex-wrap">
      <TextField
        label={
          <>
            {label} {required ? <span className="text-red-500">*</span> : null}
          </>
        }
        type={type === "password" && showPassword ? "text" : type}
        value={value || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        placeholder={type === "date" && !isFocused ? "" : placeholder}
        InputLabelProps={{
          shrink: type === "date" || value ? true : undefined,
          style: {
            color: disabled ? "#808080" : isDarkMode ? "white" : "#808AA8",
            zIndex: "5",
          },
        }}
        InputProps={{
          inputProps: {
            max: max,
            checked,
            pattern: type === "number" ? "[0-9]*" : undefined,
            style: type === "number" ? { MozAppearance: "textfield" } : {},
            inputMode: type === "number" ? "numeric" : undefined,
            onWheel: handleWheel,
            style: {
              color: isDarkMode ? "white" : "black", // White for dark mode, black for light mode
            },
            // Avoid using maxLength in inputProps for number types
          },
          className: `${disabled ? "bg-gray-100" : ""} ${
            isFocused ? "border-blue-500" : ""
          }`,
        }}
        className={`w-full text-[#173048] text-base font-normal font-inter ${className} bg-transparent border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600`}
        disabled={disabled}
        variant="outlined"
        size="medium"
        fullWidth
        inputProps={{
          maxLength: type !== "number" ? maxLength : undefined,
          style: {
            color: isDarkMode ? "white" : "black", // White for dark mode, black for light mode
          },
        }}
      />
      {type === "password" && (
        <span
          className="absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <span className="material-symbols-outlined text-gray-400 h-6 w-6">
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        </span>
      )}
    </div>
  );
};

export default TextInput;
