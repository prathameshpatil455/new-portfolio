import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleStartDateChange = (date: string) => {
    if (new Date(date) > new Date(endDate)) {
      setError('Start date cannot be after end date');
    } else {
      setError(null);
      onStartDateChange(date);
    }
  };

  const handleEndDateChange = (date: string) => {
    if (new Date(date) < new Date(startDate)) {
      setError('End date cannot be before start date');
    } else {
      setError(null);
      onEndDateChange(date);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} className="mt-4 py-4">
      <Box display="flex" flexDirection="row" gap={1}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="dd-mm-yyyy"
          variant="outlined"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 cursor-pointer"
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => handleEndDateChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="dd-mm-yyyy"
          variant="outlined"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 cursor-pointer"
        />
      </Box>
      {error && (
        <Typography variant="body2" color="error" className="mt-2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default DateRangePicker;



// const formatDate = (date: string) => {
//   if (!date) return '';
//   const [year, month, day] = date.split('-');
//   return `${day}-${month}-${year}`;
// };

// const parseDate = (date: string) => {
//   if (!date) return '';
//   const [day, month, year] = date.split('-');
//   return `${year}-${month}-${day}`;
// };

// const isValidDate = (dateString: string) => {
//   const [day, month, year] = dateString.split('-');
//   const date = new Date(`${year}-${month}-${day}`);
//   return (
//     !isNaN(date.getTime()) &&
//     day.length === 2 &&
//     month.length === 2 &&
//     year.length === 4
//   );
// };
