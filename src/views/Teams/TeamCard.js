import { Box, Button, Card, Grid, Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"

const TeamCard = ({
  team,
  openDeletemodal,
  setactiveTeam,
  handleOpenTeamModal,
}) => {
  const { id, name, primary_color, secondary_color, team_logo } = team
  return (
    <Grid item lg={4} sm={6} xs={12} key={id}>
      <Card
        sx={{
          my: 2,
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`https://football.jennypoint.com/api/resources/images/${team_logo}`}
            alt={name}
            width="100%"
            height="80px"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box sx={{ mt: 1, textAlign: "center" }}>
          <Typography
            color="primary"
            sx={{ fontSize: "22px", fontWeight: "600" }}
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <Typography
              sx={{ fontSize: "17px", fontWeight: "500" }}
              color="primary"
            >
              Primary
            </Typography>
            <Typography
              sx={{
                width: "70px",
                height: "25px",
                backgroundColor: `#${primary_color}`,
              }}
            ></Typography>{" "}
          </Box>
          <Box sx={{ ml: 2 }}>
            {" "}
            <Typography
              sx={{ fontSize: "17px", fontWeight: "500" }}
              color="primary"
            >
              Secondary
            </Typography>
            <Typography
              sx={{
                width: "70px",
                height: "25px",
                backgroundColor: `#${secondary_color}`,
              }}
            ></Typography>{" "}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ my: 1 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setactiveTeam(team)
                handleOpenTeamModal()
              }}
            >
              <EditIcon />
            </Button>
          </Box>
          <Box sx={{ my: 1 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setactiveTeam(team)
                openDeletemodal()
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}

export default TeamCard
