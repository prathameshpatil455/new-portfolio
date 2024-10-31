/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextareaInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  rows,
  placeholder,
  required,
  maxLength = 400,
  className,
  disabled,
  isDarkMode,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <TextField
        label={
          <>
            {label} {required && <span className="text-red-500">*</span>}
          </>
        }
        name={name}
        value={value}
        onBlur={(e) => {
          onBlur(e);
          setIsFocused(false);
        }}
        onChange={onChange}
        placeholder={placeholder}
        multiline
        rows={rows}
        variant="outlined"
        fullWidth
        onFocus={() => setIsFocused(true)}
        InputLabelProps={{
          shrink: value ? true : undefined,
          style: {
            color: disabled ? "#808080" : isDarkMode ? "white" : "#808aa8",
          },
        }}
        InputProps={{
          style: {
            color: isDarkMode ? "white" : "black",
          },
          className: `${disabled ? "bg-gray-100" : ""} ${
            isFocused ? "border-blue-500" : ""
          }`,
        }}
        className={`w-full text-[#173048] text-base font-normal font-inter ${className} bg-transparent border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600`}
        disabled={disabled}
        inputProps={{
          maxLength: maxLength,
          style: {
            color: isDarkMode ? "white" : "black",
          },
        }}
      />
    </div>
  );
};

export default TextareaInput;
