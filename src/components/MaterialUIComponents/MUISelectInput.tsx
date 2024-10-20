/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, OutlinedInput } from '@mui/material';

const SelectInputField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  required,
  className,
  disabled,
  extraOption,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      className={`relative ${disabled ? 'bg-gray-200' : ''} ${className}`}
      disabled={disabled}
    >
      <InputLabel
        shrink={isFocused || Boolean(value)}
        style={{ 
          color: disabled ? '#808080' : '#808AA8',
          marginLeft: "-3px",
          zIndex: 0,
        }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </InputLabel>
      <Select
        value={value || ''}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        input={
          <OutlinedInput
            label={label}
            notched={isFocused || Boolean(value)}
            name={name}
          />
        }
        fullWidth
        MenuProps={{
          disableScrollLock: true,
        }}
        inputProps={{
          style: { backgroundColor: disabled ? '#f5f5f5' : 'transparent' },
        }}
      >
        {extraOption && (
          <MenuItem value="">
            <em>{extraOption}</em>
          </MenuItem>
        )}
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
