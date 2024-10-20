/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TextField } from '@mui/material';
// Import Material-UI Search icon

const SearchField = ({ searchTerms, setSearchTerms }) => {
    const [inputValue, setInputValue] = useState(searchTerms);
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerms(value);
    }

    return (
        <div className='flex gap-4 items-center py-2 mt-4'>
            <div className="relative max-w-[300px] w-full">
                <TextField
                    label="Search"
                    value={inputValue}
                    onChange={handleSearchChange}
                    variant="outlined"
                    fullWidth
                    className='bg-white'
                />
                <span className="material-symbols-outlined text-[#8B8D98] text-2xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setSearchTerms(inputValue.trim())}
                >
                    search
                </span>
            </div>
        </div>
    );
};

export default SearchField;
