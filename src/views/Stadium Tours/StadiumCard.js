import React from "react"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"

const StadiumCard = ({ data, openDeletemodal, openStadiumModal }) => {
  const { number, photo, stadium, team } = data
  return (
    <>
      <Box sx={{ py: 1, my: 2 }}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={3} xs={12}>
            <img
              src={`https://football.jennypoint.com/api/resources/images/${photo}`}
              alt={stadium}
              width="100%"
              height="143px"
            />
          </Grid>
          <Grid item lg={9} sm={9} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={10} sm={10} xs={12}>
                <Box sx={{ my: 2 }}>
                  <Typography
                    color="primary"
                    sx={{ fontSize: "22px", fontWeight: "600" }}
                  >
                    {stadium}
                  </Typography>
                  <Typography
                    color="primary"
                    sx={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    {team}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    color="primary"
                    sx={{ fontSize: "17px", fontWeight: "500" }}
                  >
                    Inquiry Number : +{number}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2} sm={2} xs={12}>
                <Box
                  sx={{
                    display: "grid",
                    justifyContent: "end",
                    "@media (max-width: 600px)": {
                      display: "flex",
                      justifyContent: "space-around",
                    },
                  }}
                >
                  <Box sx={{ my: 1 }}>
                    <Button variant="outlined" onClick={openStadiumModal}>
                      <EditIcon />
                    </Button>
                  </Box>
                  <Box sx={{ my: 1 }}>
                    <Button variant="outlined" onClick={openDeletemodal}>
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  )
}

export default StadiumCard
