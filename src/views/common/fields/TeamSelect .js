import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"
import Inputcustom from "./Inputcustom"

const TeamSelect = () => {
  const [value, setValue] = useState(null)
  const team1 = [
    { label: "Chelsea", value: 1 },
    { label: "ArsenalFC", value: 2 },
    { label: "Manchester City", value: 3 },
    { label: "Tottenham Hotspur", value: 4 },
    { label: "Liverpool", value: 5 },
  ]

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      options={team1}
      getOptionLabel={(option) => option.label}
      fullWidth
      disablePortal
      id="team2"
      variant="outlined"
      renderInput={(params) => (
        <Inputcustom
          {...params}
          label="Select Team"
          variant="filled"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select Opponent"
        />
      )}
    />
  )
}

export default TeamSelect
