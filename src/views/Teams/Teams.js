import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { WhitecardBox } from '../Stadium Tours/StadiumTours'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArsenalFC from "../../imgs/teamslogo/ArsenalFC.png"
const Teams = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            <WhitecardBox >
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                    <Typography variant='h5' sx={{ fontSize: "25px", fontWeight: "600" }}>Teams</Typography>
                    <Button variant="contained" to="" component={Link} > <AddIcon /> add</Button>
                </Box>
                <Divider />
                <Box>
                <Box sx={{py:1}}>
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={1}  xs={12} sx={{display:"flex", justifyContent:"center" }}>
                <img src={ArsenalFC} alt='ArsenalFC' width="100%" height="80px" style={{objectFit:"contain"}} />
              </Grid>
              <Grid item lg={11}>
                <Grid container spacing={2}>
                  <Grid item lg={10}>
                  <Box sx={{my:2}}>
                    <Typography sx={{fontSize:"25px" , fontWeight:"600"}} >Manchester United</Typography>
                  </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                     <Box sx={{textAlign:"center"}}> <Typography sx={{fontSize:"20px", fontWeight:"500"}} >Primary</Typography><Typography sx={{width:"70px",height:"25px", backgroundColor:"#DA020E",}}></Typography> </Box>
                     <Box sx={{ml:2}}> <Typography sx={{fontSize:"20px", fontWeight:"500"}}>Secondary</Typography><Typography sx={{width:"70px",height:"25px", backgroundColor:"#FFE500",}}></Typography> </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={2} sx={{}}>
                  <Box sx={{display:"grid", justifyContent:"end"}}>

                    <Box sx={{my:1}}>
                      <Button variant="outlined"> <EditIcon/></Button>
                    </Box>
                    <Box sx={{my:1}}>
                      <Button variant="outlined"><DeleteOutlineOutlinedIcon/></Button>
                    </Box>
                  </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </Box>
                </Box>
            </WhitecardBox>
        </Box>
    )
}

export default Teams
