import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const CityDropdown = () => {
    const [city, setCity] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 150 , height: 45 }}>
                <InputLabel id="user-city-dropdown"
                sx={{ lineHeight: 1.2, fontSize: "12px" }}
                >Your City</InputLabel>
                <Select
                    labelId="user-city-dropdown"
                    id="city-dropdownList"
                    value={city}
                    onChange={handleChange}
                    autoWidth
                    label="Your City"
                    sx={{
                        height: 45, // Adjust height here
                        fontSize: "14px", // Adjust font size for the dropdown
                    }}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    <MenuItem value={"Noida"}>Noida</MenuItem>
                    <MenuItem value={"Gurgaon"}>Gurgaon</MenuItem>
                    <MenuItem value={"Ghaziabad"}>Ghaziabad</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
