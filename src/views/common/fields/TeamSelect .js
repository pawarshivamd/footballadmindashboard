import { Autocomplete } from "@mui/material"
import { useState } from "react"
import Inputcustom from "./Inputcustom"
import { useFormikContext } from "formik"

const TeamSelect = ({ field, ...otherProps }) => {
  const { name } = field
  const { setFieldValue } = useFormikContext()

  const [value, setValue] = useState(null)
  const team1 = [
    { label: "Chelsea", value: 1 },
    { label: "ArsenalFC", value: 2 },
    { label: "Manchester City", value: 3 },
    { label: "Tottenham Hotspur", value: 4 },
    { label: "Liverpool", value: 5 },
  ]

  const handleChange = (event, newValue) => {
    console.log({ name, newValue })
    setFieldValue(name, newValue)
    setValue(newValue)
  }
  return (
    <Autocomplete
      {...field}
      {...otherProps}
      value={value}
      onChange={handleChange}
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
