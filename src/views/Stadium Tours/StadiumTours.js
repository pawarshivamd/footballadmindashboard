import React, { useState } from "react"
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import { Link } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import manchester from "../../imgs/stadium/manchester.png"
import ArsenalFC from "../../imgs/stadium/ArsenalFC.png"
import ChelseaFC from "../../imgs/stadium/ChelseaFC.png"
import LiverpooFC from "../../imgs/stadium/Liverpoo FC.png"
import ManchesterCity from "../../imgs/stadium/ManchesterCity.png"
import TottenhamHotspurs from "../../imgs/stadium/TottenhamHotspurs.png"
import FCBarcelona from "../../imgs/stadium/FCBarcelona.png"
import RealMadrid from "../../imgs/stadium/RealMadrid.png"
import AtleticodeMadrid from "../../imgs/stadium/AtleticodeMadrid.png"
import ACMilanInterMilan from "../../imgs/stadium/ACMilanInterMilan.png"
import JuventusFC from "../../imgs/stadium/JuventusFC.png"
import ASRoma from "../../imgs/stadium/ASRoma.png"
import PSG from "../../imgs/stadium/PSG.png"
import BayernMunich from "../../imgs/stadium/BayernMunich.png"
import BorussiaDortmund from "../../imgs/stadium/BorussiaDortmund.png"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"

const stadiumtoursdata = [
  {
    id: "0",
    StadiumImg: manchester,
    ImgAlt: "manchester",
    TeamName: "Manchester United",
    Place: "Old Trafford",
    INumber: "9534127652",
  },
  {
    id: "1",
    StadiumImg: ArsenalFC,
    ImgAlt: "ArsenalFC",
    TeamName: "Arsenal FC",
    Place: "Emirates Stadium",
    INumber: "8534127652",
  },
  {
    id: "2",
    StadiumImg: ChelseaFC,
    ImgAlt: "ChelseaFC",
    TeamName: "Chelsea FC",
    Place: "Stamford Bridge",
    INumber: "5534123652",
  },
  {
    id: "3",
    StadiumImg: LiverpooFC,
    ImgAlt: "LiverpooFC",
    TeamName: "Liverpool FC",
    Place: "Anfield",
    INumber: "2534127632",
  },
  {
    id: "4",
    StadiumImg: ManchesterCity,
    ImgAlt: "ManchesterCity",
    TeamName: "Manchester City",
    Place: "Etihad Stadium",
    INumber: "6514127652",
  },
  {
    id: "5",
    StadiumImg: TottenhamHotspurs,
    ImgAlt: "TottenhamHotspurs",
    TeamName: "Tottenham Hotspurs",
    Place: "Spurs Stadium",
    INumber: "2534123352",
  },
  {
    id: "6",
    StadiumImg: FCBarcelona,
    ImgAlt: "FCBarcelona",
    TeamName: "FC Barcelona",
    Place: "Camp Nou",
    INumber: "2534123652",
  },
  {
    id: "7",
    StadiumImg: RealMadrid,
    ImgAlt: "RealMadrid",
    TeamName: "Real Madrid",
    Place: "Santiago Bernabeu",
    INumber: "1034127652",
  },
  {
    id: "8",
    StadiumImg: AtleticodeMadrid,
    ImgAlt: "AtleticodeMadrid",
    TeamName: "Atletico De Madrid",
    Place: "Wanda Metropolitano",
    INumber: "3534527652",
  },
  {
    id: "9",
    StadiumImg: ACMilanInterMilan,
    ImgAlt: "ACMilanInterMilan",
    TeamName: "AC Milan/ Inter Milan",
    Place: "San Siro",
    INumber: "9334122654",
  },
  {
    id: "10",
    StadiumImg: JuventusFC,
    ImgAlt: "JuventusFC",
    TeamName: "Juventus FC",
    Place: "Allianz Stadium",
    INumber: "9332127652",
  },
  {
    id: "11",
    StadiumImg: ASRoma,
    ImgAlt: "ASRoma",
    TeamName: "AS Roma",
    Place: "Stadio Olimpico",
    INumber: "9534127652",
  },
  {
    id: "12",
    StadiumImg: PSG,
    ImgAlt: "PSG",
    TeamName: "PSG",
    Place: "Parc Des Princes",
    INumber: "9534127652",
  },
  {
    id: "13",
    StadiumImg: BayernMunich,
    ImgAlt: "BayernMunich",
    TeamName: "Bayern Munich",
    Place: "Allianz Arena",
    INumber: "9534127652",
  },
  {
    id: "14",
    StadiumImg: BorussiaDortmund,
    ImgAlt: "BorussiaDortmund",
    TeamName: "Borussia Dortmund",
    Place: "Signal Iduna Park",
    INumber: "9534127652",
  },
]

export const WhitecardBox = styled(Box)(() => ({
  background: "#ffffff",
  padding: "24px",
  borderRadius: "20px",
  marginInline: "32px",
  marginBottom: "16px",

  "@media (max-width: 768px)": {
    marginInline: "16px",
  },
}))

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
const StadiumTours = () => {
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
            color="primary"
            sx={{ fontSize: "25px", fontWeight: "600" }}
          >
            Stadium Tours
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
          {stadiumtoursdata.map((curEle, index) => {
            const { StadiumImg, ImgAlt, TeamName, Place, INumber } = curEle
            return (
              <>
                <Box key={index} sx={{ py: 1, my: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item lg={3} sm={3} xs={12}>
                      <img
                        src={StadiumImg}
                        alt={ImgAlt}
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
                              {Place}
                            </Typography>
                            <Typography
                              color="primary"
                              sx={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              {TeamName}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              color="primary"
                              sx={{ fontSize: "17px", fontWeight: "500" }}
                            >
                              Inquiry Number : {INumber}
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </>
            )
          })}
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
                    id="tema-name"
                    label="Team Name :"
                    placeholder="Enter Team Name"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Inputcustom
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    id="palce-name"
                    label="Place Name :"
                    placeholder="Enter Place Name"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={12} xs={12}>
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

export default StadiumTours
