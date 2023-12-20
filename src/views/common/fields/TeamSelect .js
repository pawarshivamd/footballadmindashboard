import { Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import Inputcustom from "./Inputcustom";
import { useFormikContext } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../../actions/teamsActions";

const TeamSelect = ({ field, ...otherProps }) => {
  const { name } = field;
  const dispatch = useDispatch();
  const { setFieldValue, values } = useFormikContext();
  const [teamsOption, setTeamsOption] = useState([]);

  const [selectedTeam, setselectedTeam] = useState(null);
  useEffect(() => {
    const initialTeam = teamsOption.find((team) => team.value === field.value);
    setselectedTeam(initialTeam);
  }, [field.value, teamsOption]);

  const { teamsData, loading } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    if (teamsData && teamsData.length) {
      setTeamsOption(
        teamsData.map((team) => {
          return { label: team.name, value: team.id };
        })
      );
    }
    const team = teamsData.find((elem) => elem.id === values.team_id);
    if (team) setselectedTeam({ label: team.name, value: team.id });
  }, [teamsData]);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setFieldValue(name, newValue?.value);
    console.log(newValue);
    setselectedTeam(newValue);
  };
  return (
    <Autocomplete
      {...field}
      {...otherProps}
      value={selectedTeam}
      onChange={handleChange}
      options={teamsOption}
      getOptionLabel={(option) => option.label}
      fullWidth
      disablePortal
      id="team2"
      variant="outlined"
      disabled={loading}
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
  );
};

export default TeamSelect;
