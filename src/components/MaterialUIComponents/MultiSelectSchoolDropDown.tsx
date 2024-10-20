import React, { useEffect, useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchoolByGroupId } from '../../redux/thunks/FetchSchoolByGroupId';

interface MultiSelectSchoolDropDownProps {
  selectedSchools: string[]; // Array of selected school IDs
  onSchoolChange: (selected: string[]) => void; // Callback to pass selected school IDs to parent
}

const MultiSelectSchoolDropDown: React.FC<MultiSelectSchoolDropDownProps> = ({ selectedSchools, onSchoolChange }) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state: any) => state.auth);
  const schoolName = useSelector((state: any) => state.schoolSlice.schoolName || []);
  // Initialize state for selected schools (storing both schoolId and schoolName)
  const [localSelectedSchools, setLocalSelectedSchools] = useState<string[]>(selectedSchools);

  useEffect(() => {
    if (authToken) {
      dispatch(fetchSchoolByGroupId());
    }
  }, [authToken, dispatch]);

  useEffect(() => {
    setLocalSelectedSchools(selectedSchools);
  }, [selectedSchools]);

  // Handle change event to update selected schools
  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    const updatedSelectedSchools = typeof value === 'string' ? value.split(',') : value;
    setLocalSelectedSchools(updatedSelectedSchools)

    onSchoolChange(updatedSelectedSchools);
  };
  return (
    <div className='max-w-[300px] py-4 mt-4 w-full'>
      <FormControl fullWidth>
        <InputLabel>School</InputLabel>
        <Select
          multiple
          value={localSelectedSchools} // Set value as array of selected school IDs
          onChange={handleChange}
          renderValue={(selected: any) => 
            selected
              .map((schoolId: string) => {
                const school = schoolName.find((s: any) => s.schoolId === schoolId);
                return school ? school.schoolName : '';
              })
              .join(', ')
          }
          label="School"
        >
          {Array.isArray(schoolName) && schoolName.map((school: any) => (
            <MenuItem key={school.schoolId} value={school.schoolId}>
              <Checkbox
                checked={localSelectedSchools.includes(school.schoolId)}
              />
              <ListItemText primary={school?.schoolName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelectSchoolDropDown;
