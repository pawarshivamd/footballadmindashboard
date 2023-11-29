import React from "react"
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material"
import styled from "styled-components"
import Inputcustom from "../common/fields/Inputcustom"
import TeamSelect from "../common/fields/TeamSelect "

const team1 = [
  { label: "Chelsea" },
  { label: "ArsenalFC" },
  { label: "Manchester City" },
  { label: "Tottenham Hotspur" },
  { label: "Liverpool" },
]
const team2 = [
  { label: "Chelsea" },
  { label: "ArsenalFC" },
  { label: "Manchester City" },
  { label: "Tottenham Hotspur" },
  { label: "Liverpool" },
]

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(100% - 0px , 600px)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "40px 30px",
}

const MatchForm = () => {
  return (
    <Box sx={style}>
      <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
          <TeamSelect />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TeamSelect />
        </Grid>
        <Grid item lg={6} xs={12}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="text"
              id="League-Name"
              label="League Name :"
              variant="filled"
              placeholder="Enter League Name"
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} xs={12}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="text"
              id="Inquiry-Number"
              label="Inquiry Number :"
              placeholder="Enter Inquiry Number"
              variant="filled"
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} xs={12}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="date"
              id="date"
              label="Date :"
              variant="filled"
            />
          </FormControl>
        </Grid>{" "}
        <Grid item lg={6} xs={12}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="time"
              label="Time :"
              id="time"
              variant="filled"
            />
          </FormControl>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              //   onClick={handleClose}
              sx={{
                mr: 1,
                width: "15%",
                fontSize: "17px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "15%",
                fontSize: "17px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MatchForm
