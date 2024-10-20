import React, { useEffect, useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchoolByGroupId } from '../../redux/thunks/FetchSchoolByGroupId';

interface MultiSelectStreamDropDownProps {
  selectedStreams: string[]; // Array of selected stream IDs
  onStreamChange: (selected: string[]) => void; // Callback to pass selected stream IDs to parent
}

const MultiSelectStreamDropDown: React.FC<MultiSelectStreamDropDownProps> = ({ selectedStreams, onStreamChange }) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state: any) => state.auth);
  const schoolName = useSelector((state: any) => state.schoolSlice?.schoolName || []);

  // Local state to manage selected streams
  const [localSelectedStreams, setLocalSelectedStreams] = useState<string[]>(selectedStreams);

  useEffect(() => {
    if (authToken) {
      dispatch(fetchSchoolByGroupId()); // Dispatch action to fetch streams
    }
  }, [authToken, dispatch]);

  useEffect(() => {
    setLocalSelectedStreams(selectedStreams); // Update local state when selectedStreams prop changes
  }, [selectedStreams]);

  // Handle change event to update selected streams
  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    const updatedStreams = typeof value === 'string' ? value.split(',') : value;
    setLocalSelectedStreams(updatedStreams);
    onStreamChange(updatedStreams); // Call the parent callback
  };

  const allStreams = Array.isArray(schoolName)
    ? schoolName.flatMap(school =>
        school.mstSchoolStreams.map(stream => ({
          streamId: stream.streamId,
          streamName: stream.streamName,
        }))
      )
    : [];

  const mergeStreams = (streams: any[]) => {
    const streamMap = new Map<string, string>();

    streams.forEach(({ streamId, streamName }) => {
      if (streamMap.has(streamName)) {
        const existingIds = streamMap.get(streamName);
        streamMap.set(streamName, `${existingIds},${streamId}`);
      } else {
        streamMap.set(streamName, streamId.toString());
      }
    });

    return Array.from(streamMap, ([streamName, streamId]) => ({
      streamId,
      streamName,
    }));
  };

  const mergedStreams = mergeStreams(allStreams);

  return (
    <div className='max-w-[300px] py-4 mt-4 w-full'>
      <FormControl fullWidth>
        <InputLabel>Stream</InputLabel>
        <Select
          multiple
          value={localSelectedStreams} // Set value as array of selected stream IDs
          onChange={handleChange}
          renderValue={(selected: any) =>
            mergedStreams
              .filter(stream => selected.includes(stream.streamId))
              .map((stream: any) => stream.streamName)
              .join(', ')
          }
          label="Stream"
        >
          {mergedStreams?.map((stream: any) => (
            <MenuItem key={stream.streamId} value={stream.streamId}>
              <Checkbox checked={localSelectedStreams.indexOf(stream.streamId) > -1} />
              <ListItemText primary={stream?.streamName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelectStreamDropDown;
