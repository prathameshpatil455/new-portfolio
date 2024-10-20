/* eslint-disable react/prop-types */
import React from "react";
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
  maxLength = 250,
}) => {
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
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        multiline
        rows={rows}
        variant="outlined"
        fullWidth
        InputProps={{
          style: {
            borderColor: "#CACFDC",
            padding: "10px",
          },
        }}
        className="mb-4 bg-transparent rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
        inputProps={{
          maxLength: maxLength,
        }}
      />
    </div>
  );
};

export default TextareaInput;
