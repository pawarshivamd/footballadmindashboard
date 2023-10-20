import React from 'react'
import { WhitecardBox } from '../Stadium Tours/StadiumTours'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import Loading from '../../layout/Loader/Loading'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ArsenalFC from "../../imgs/teamslogo/ArsenalFC.png"
import vs from "../../imgs/icon/vs-png.webp.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const TeamsMatches = ({ loading }) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
            {loading ? (
                <Loading
                />
            ) : (
                <WhitecardBox >
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5' sx={{ fontSize: "25px", fontWeight: "600" }}>Stadium Tours</Typography>
                        <Button variant="contained" to="/" component={Link} > <AddIcon /> add</Button>
                    </Box>
                    <Divider />

                    <Box sx={{py:1,my:2}}>
                        <Grid container spacing={2}>
                            <Grid item lg={4}>
                                <Grid container spacing={2}>
                                    <Grid item lg={4}>
                                        <Box><img src={ArsenalFC} alt="" width="100%" height="70px" style={{ objectFit: "contain" }} /></Box>
                                        <Typography sx={{ textAlign: "center" }}>ArsenalFC</Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <img src={vs} alt="vs" width="100%" height="70px" style={{ objectFit: "contain" }} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Box><img src={ArsenalFC} alt="ArsenalFC" width="100%" height="70px" style={{ objectFit: "contain" }} /></Box>
                                        <Typography sx={{ textAlign: "center" }}>ArsenalFC</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={8}>
                                <Grid container spacing={2}>
                                    <Grid item lg={10}>
                                        <Box>
                                            <Typography>League Name : <span>Europ League</span></Typography>
                                            <Typography>Date : <span>Saturday 16th September</span></Typography>
                                            <Typography>Time : <span>15:00</span></Typography>
                                            <Typography>Inquiry Number : <span>545454421</span></Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Box sx={{ display: "grid", justifyContent: "end" }}>
                                            <Box sx={{ my: 1 }}>
                                                <Button variant="outlined"> <EditIcon /></Button>
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

                </WhitecardBox>
            )}

        </Box>

    )
}

export default TeamsMatches
