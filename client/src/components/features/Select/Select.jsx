import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ sizes, size, handleChange }) {
  
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].items = 0
  }

  return (
    <div>
      <Box sx={{ minWidth: 100, display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleChange}
          >
            {sizes.map((size, index) => (
              <MenuItem key={index} value={size.size}>
                {size.size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
