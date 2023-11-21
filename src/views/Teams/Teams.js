import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { WhitecardBox } from "../Stadium Tours/StadiumTours"
import { Link } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import manchester from "../../imgs/teamslogo/manchester.png"
import ArsenalFC from "../../imgs/teamslogo/Arsenal.png"
import liverpool from "../../imgs/teamslogo/liverpool.png"
import chelsea from "../../imgs/teamslogo/chelsea.png"
import manchestercity from "../../imgs/teamslogo/manchestercity.png"
import tottenhamhotspur from "../../imgs/teamslogo/tottenhamhotspur.png"
import { useEffect, useState } from "react"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../actions/apiActions"
const teamsapi = [
  {
    id: "0",
    teamimg: manchester,
    teamimgalt: "manchester",
    temaName: "Manchester United",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#FFE500",
    secondarycolor: "#DA020E",
  },
  {
    id: "1",
    teamimg: ArsenalFC,
    teamimgalt: "ArsenalFC",
    temaName: "Arsenal",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#DA020E",
    secondarycolor: "#E9E8E8",
  },
  {
    id: "2",
    teamimg: liverpool,
    teamimgalt: "liverpool",
    temaName: "Liverpool",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#DA020E",
    secondarycolor: "#E9E8E8",
  },
  {
    id: "3",
    teamimg: chelsea,
    teamimgalt: "chelsea",
    temaName: "Chelsea",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#034694",
    secondarycolor: "#E9E8E8",
  },
  {
    id: "4",
    teamimg: manchestercity,
    teamimgalt: "manchestercity",
    temaName: "Manchester City",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#6CADDF",
    secondarycolor: "#E9E8E8",
  },
  {
    id: "5",
    teamimg: tottenhamhotspur,
    teamimgalt: "tottenhamhotspur",
    temaName: "Tottenham Hotspur",
    primary: "Primary",
    secondary: "Secondary",
    primarycolor: "#132257",
    secondarycolor: "#E9E8E8",
  },
]
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(100% - 0px , 400px)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "10px 30px",
}
const Teams = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [image, setImage] = useState(null)
  const [isImageSelected, setImageSelected] = useState(false)

  const changeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
      setImageSelected(true)
    }
  }

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.api)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%" }}
    >
      <WhitecardBox>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            py: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "25px", fontWeight: "600" }}
            color="primary"
          >
            Teams
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddIcon />}
          >
            <span style={{ marginTop: "3px" }}>add</span>
          </Button>
        </Box>
        <Divider />
        <Box>
          <Box sx={{ py: 1 }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {teamsapi.map((curEle, index) => {
                const {
                  teamimg,
                  teamimgalt,
                  temaName,
                  primary,
                  secondary,
                  primarycolor,
                  secondarycolor,
                } = curEle
                return (
                  <Grid item lg={4} sm={6} xs={12} key={index}>
                    <Card
                      sx={{
                        my: 2,
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        p: 1,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                          src={teamimg}
                          alt={teamimgalt}
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
                          {temaName}
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
                            {primary}
                          </Typography>
                          <Typography
                            sx={{
                              width: "70px",
                              height: "25px",
                              backgroundColor: primarycolor,
                            }}
                          ></Typography>{" "}
                        </Box>
                        <Box sx={{ ml: 2 }}>
                          {" "}
                          <Typography
                            sx={{ fontSize: "17px", fontWeight: "500" }}
                            color="primary"
                          >
                            {secondary}
                          </Typography>
                          <Typography
                            sx={{
                              width: "70px",
                              height: "25px",
                              backgroundColor: secondarycolor,
                            }}
                          ></Typography>{" "}
                        </Box>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <Box sx={{ my: 1 }}>
                          <Button variant="outlined" onClick={handleOpen}>
                            {" "}
                            <EditIcon />
                          </Button>
                        </Box>
                        <Box sx={{ my: 1 }}>
                          <Button variant="outlined">
                            <DeleteOutlineOutlinedIcon />
                          </Button>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  style={{
                    margin: "0 auto",
                    display: "block",
                    borderRadius: 0,
                  }}
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={changeImage}
                  />
                  {image ? (
                    <>
                      {isImageSelected && (
                        <HighlightOffOutlinedIcon
                          sx={{
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                          }}
                          onClick={() => {
                            setImage(null)
                            setImageSelected(false)
                          }}
                        />
                      )}
                      <img
                        src={image}
                        alt="Selected Image"
                        style={{ height: "auto", width: 120 }}
                      />
                    </>
                  ) : (
                    <img
                      src={
                        "https://assets.upload.io/website/blog_assets/icons/material/icons/add_photo_alternate_outlined.svg"
                      }
                      alt=""
                      style={{ height: 200, width: 200 }}
                    />
                  )}
                </IconButton>
              </Grid>
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Inputcustom
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    id="team-name"
                    label="Team Name :"
                    placeholder="Enter Team Name"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <FormControl fullWidth>
                  <Inputcustom
                    InputLabelProps={{ shrink: true }}
                    type="color"
                    id="Primary-color"
                    label="Primary :"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={6} xlOffset={4}>
                <FormControl fullWidth>
                  <Inputcustom
                    InputLabelProps={{ shrink: true }}
                    type="color"
                    id="secondry-color"
                    label="Secondry :"
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
                    onClick={handleClose}
                    sx={{
                      mr: 1,
                      width: "25%",
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
                      width: "25%",
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
        </Modal>
      </WhitecardBox>
    </Box>
  )
}

export default Teams
