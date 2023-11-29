import React from "react"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import vs from "../../imgs/icon/vs-png.webp.png"
import EditIcon from "@mui/icons-material/Edit"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"

const MatchBox = ({ match, setModalOpen }) => {
  const {
    date,
    host,
    host_logo,
    id,
    league,
    opponent,
    opponent_logo,
    time,
    leagueleague,
  } = match

  return (
    <Grid item lg={12} sx={{ my: 1 }} key={id}>
      <Grid container>
        <Grid item lg={4} sm={12} xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={4} sm={3} xs={3}>
              <Box>
                <img
                  src={`https://football.jennypoint.com/api/resources/images/${host_logo}`}
                  alt={host}
                  width="100%"
                  height="70px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{ textAlign: "center", fontWeight: "600" }}
                color="primary"
              >
                {host}
              </Typography>
            </Grid>
            <Grid item lg={4} sm={3} xs={3}>
              <img
                src={vs}
                alt="vs"
                width="100%"
                height="70px"
                style={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid item lg={4} sm={3} xs={3}>
              <Box>
                <img
                  src={`https://football.jennypoint.com/api/resources/images/${opponent_logo}`}
                  alt={opponent}
                  width="100%"
                  height="70px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{ textAlign: "center", fontWeight: "600" }}
                color="primary"
              >
                {opponent}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          md={10}
          sm={10}
          xs={12}
          sx={{
            my: "auto",
            "@media (max-width: 600px)": {
              my: 1,
            },
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={6} sm={6} xs={12}>
              <Typography sx={{ fontWeight: 600, mb: 1 }} color="primary">
                League Name : <span>{league}</span>
              </Typography>
              <Typography sx={{ fontWeight: 600, mb: 1 }} color="primary">
                Date : <span>{date}</span>
              </Typography>
            </Grid>
            <Grid
              item
              lg={6}
              sm={6}
              xs={12}
              sx={{
                "@media(max-width:600px)": { pt: " 0 !important" },
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 1 }} color="primary">
                Time : <span>{time}</span>
              </Typography>
              <Typography sx={{ fontWeight: 600, mb: 1 }} color="primary">
                Inquiry Number : <span>{league}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={12}>
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
              <Button variant="outlined" onClick={() => setModalOpen(true)}>
                <EditIcon />
              </Button>
            </Box>
            <Box sx={{ my: 1 }}>
              <Button variant="outlined">
                <DeleteOutlineOutlinedIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />
    </Grid>
  )
}

export default MatchBox
