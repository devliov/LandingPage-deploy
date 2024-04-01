"use cliente";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

interface ServiceLocationsProps {
  value: string;
  onAddressSelect: (address: string) => void;
}

export default function ServiceLocationsList({
  value,
  onAddressSelect,
}: ServiceLocationsProps) {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onAddressSelect(newValue);
  };

  const addresses = [
    {
      name: "Local 1",
      street: "123 Main Street",
      number: "101",
    },
    {
      name: "Local 2",
      street: "456 Elm Street",
      number: "202",
    },
    {
      name: "Local 3",
      street: "789 Maple Avenue",
      number: "303",
    },
    {
      name: "Local 4",
      street: "321 Oak Boulevard",
      number: "404",
    },
  ];

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <div className="flex flex-wrap gap-5">
          {addresses.map((address, index) => (
            <FormControlLabel
              key={index}
              value={address.name}
              label={
                <Typography>
                  <div>
                    <span className="font-bold">{address.name}</span>
                  </div>
                  {address.street}, {address.number}
                </Typography>
              }
              control={
                <Radio
                  checked={selectedValue === `${address.name}`}
                  onChange={() =>
                    onAddressSelect(
                      `${address.name}, ${address.street}, ${address.number}`
                    )
                  }
                  value={`${address.name}`}
                  sx={{
                    "&.Mui-checked": {
                      color: "#56B3B8",
                    },
                    color: "#56B3B8",
                  }}
                />
              }
              className={`w-[320px] h-[108px] border border-grayS300 rounded-lg ${
                selectedValue === address.name
                  ? "border-greenS200 shadow-lg shadow-green-100"
                  : ""
              }`}
            />
          ))}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
