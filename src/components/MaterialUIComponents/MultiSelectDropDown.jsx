/* eslint-disable react/prop-types */
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MultiSelectDropdown = ({ selectedStatuses, onStatusesChange }) => {
  const statusOptions = [
    { value: 1, label: "Submitted" },
    { value: 2, label: "Active" },
    { value: 4, label: "Reviewed" },
    { value: 5, label: "Entrance" },
    { value: 6, label: "Scheduled" },
    { value: 8, label: "Hold" },
    { value: 7, label: "Confirmed" },
    { value: 100, label: "Rejected" },
  ];

    const[localSelectedStatuses, setLocalSelectedStatuses] = useState(selectedStatuses);

    useEffect(() => {
        setLocalSelectedStatuses(selectedStatuses);
    }, [selectedStatuses]);
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const updatedStatuses =
      typeof value === "string" ? value.split(",") : value;
    setLocalSelectedStatuses(updatedStatuses);
    onStatusesChange(updatedStatuses); // Call the parent callback
  };

  return (
    <div className="max-w-[300px] py-4 mt-4 w-full">
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          multiple
          value={localSelectedStatuses}
          onChange={handleChange}
          label="Status"
          renderValue={(selected) => selected.join(", ")}
        >
          {statusOptions.map((status) => (
            <MenuItem key={status.value} value={status.label}>
              <Checkbox
                checked={localSelectedStatuses.indexOf(status.label) > -1}
              />
              <ListItemText primary={status.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

MultiSelectDropdown.propTypes = {
  selectedStatuses: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MultiSelectDropdown;
