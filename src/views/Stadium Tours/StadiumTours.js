import React, { useState } from 'react';
import { Box, Button, Divider, Grid, IconButton, Modal, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import manchester from '../../imgs/stadium/manchester.png'
import ArsenalFC from '../../imgs/stadium/ArsenalFC.png'
import ChelseaFC from '../../imgs/stadium/ChelseaFC.png'
import LiverpooFC from '../../imgs/stadium/Liverpoo FC.png'
import ManchesterCity from '../../imgs/stadium/ManchesterCity.png'
import TottenhamHotspurs from '../../imgs/stadium/TottenhamHotspurs.png'
import FCBarcelona from '../../imgs/stadium/FCBarcelona.png'
import RealMadrid from '../../imgs/stadium/RealMadrid.png'
import AtleticodeMadrid from '../../imgs/stadium/AtleticodeMadrid.png'
import ACMilanInterMilan from '../../imgs/stadium/ACMilanInterMilan.png'
import JuventusFC from '../../imgs/stadium/JuventusFC.png'
import ASRoma from '../../imgs/stadium/ASRoma.png'
import PSG from '../../imgs/stadium/PSG.png'
import BayernMunich from '../../imgs/stadium/BayernMunich.png'
import BorussiaDortmund from '../../imgs/stadium/BorussiaDortmund.png'

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
  background: '#ffffff',
  padding: '24px',
  borderRadius: '20px',
  marginInline: '32px',
  marginBottom: '16px',

  '@media (max-width: 768px)': {
    marginInline: '16px',
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'min(100% - 0px , 400px)',
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  padding: '10px 30px',
};
const StadiumTours = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState(null);
  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (

    <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>

      <WhitecardBox >
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
          <Typography variant='h5' sx={{ fontSize: "25px", fontWeight: "600" }}>Stadium Tours</Typography>
          <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />} ><span style={{ marginTop: "3px" }}>add</span></Button>
        </Box>
        <Divider />
        <Box>
          {stadiumtoursdata.map((curEle, index) => {
            const { StadiumImg, ImgAlt, TeamName, Place, INumber } = curEle;
            return (
              <>


                <Box sx={{ py: 1, my: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item lg={3} sm={3} xs={12}>
                      <img src={StadiumImg} alt={ImgAlt} width="100%" height="143px" />
                    </Grid>
                    <Grid item lg={9} sm={9} xs={12}>
                      <Grid container spacing={2}>
                        <Grid item lg={10} sm={10} xs={12} >
                          <Box sx={{ my: 2 }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "600" }} >{Place}</Typography>
                            <Typography sx={{ fontSize: "17px", fontWeight: "500" }} >{TeamName}</Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>Inquiry Number : {INumber}</Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={2} sm={2} xs={12}>
                          <Box sx={{
                            display: "grid",
                            justifyContent: "end",
                            '@media (max-width: 767px)': {
                              display: 'flex',
                              justifyContent: "space-around",
                            },
                          }}>
                            <Box sx={{ my: 1 }}>
                              <Button variant="outlined" onClick={handleOpen}> <EditIcon /></Button>
                            </Box>
                            <Box sx={{ my: 1 }}>
                              <Button variant="outlined"><DeleteOutlineOutlinedIcon /></Button>
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
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              style={{ margin: '0 auto', display: 'block', borderRadius: 0 }}
            >
              <input hidden accept="image/*" type="file"
                onChange={changeImage}
              />

              {image ? (
                <img src={image} alt="Selected Image" style={{ height: "auto", width: 120 }} />
              ) : (
                <img
                  src={
                    'https://assets.upload.io/website/blog_assets/icons/material/icons/add_photo_alternate_outlined.svg'
                  }
                  alt=""
                  style={{ height: 200, width: 200 }}
                />
              )}
            </IconButton>
            <Box sx={{ my: 2 }}>
              <label htmlFor="team-name" style={{ fontSize: "17px", fontWeight: "600" }}>Team Name :</label>
              <input type="text" id="tema-name" width="100%" className='text-input' placeholder='Enter team name' />
            </Box>
            <Box sx={{ my: 2 }}>
              <label htmlFor="place-name" style={{ fontSize: "17px", fontWeight: "600" }}>Place Name :</label>
              <input type="text" id="palce-name" width="100%" className='text-input' placeholder='Enter Place name' />
            </Box>
            <Box sx={{ my: 2 }}>
              <label htmlFor="inquiry-number" style={{ fontSize: "17px", fontWeight: "600" }}>Inquiry Number :</label>
              <input type="text" id="inquiry-number" width="100%" className='text-input' placeholder='Enter inquiry number' />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }} >
              <Button variant='outlined' onClick={handleClose} sx={{ width: '45%', fontSize: "17px", fontWeight: "500" }}>Cancel</Button>
              <Button variant='contained' sx={{ width: '45%', fontSize: "17px", fontWeight: "500" }}>Save</Button>
            </Box>
          </Box>
        </Modal>

      </WhitecardBox>


    </Box>

  )
}

export default StadiumTours
