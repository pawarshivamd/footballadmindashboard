import React, { useState } from 'react'
import { WhitecardBox } from '../Stadium Tours/StadiumTours'
import { Autocomplete, Box, Button, Divider, Grid, IconButton, Modal, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ArsenalFC from "../../imgs/teamslogo/Arsenal.png";
import chelsea from "../../imgs/teamslogo/chelsea.png"
import vs from "../../imgs/icon/vs-png.webp.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import manchestercity from "../../imgs/teamslogo/manchestercity.png";
import tottenhamhotspur from "../../imgs/teamslogo/tottenhamhotspur.png"
import liverpool from '../../imgs/teamslogo/liverpool.png';
const teamsvsapi = [
    {
        id: 0,
        teamimg1: chelsea,
        teamimg1Alt: "chelsea",
        teamName1: "Chelsea",
        teamimg2: ArsenalFC,
        teamimg2Alt: "ArsenalFC",
        teamName2: "ArsenalFC",
        leagueName: "Europ League",
        date: "Saturday 16th September",
        time: "15:00",
        inquiryNumber: "545454421",
    },
    {
        id: 1,
        teamimg1: manchestercity,
        teamimg1Alt: "manchestercity ",
        teamName1: "Manchester City ",
        teamimg2: tottenhamhotspur,
        teamimg2Alt: "tottenhamhotspur",
        teamName2: "Tottenham Hotspur",
        leagueName: "Europ League",
        date: "Saturday 16th September",
        time: "15:00",
        inquiryNumber: "545454421",
    },
    {
        id: 2,
        teamimg1: chelsea,
        teamimg1Alt: "chelsea",
        teamName1: "Chelsea",
        teamimg2: liverpool,
        teamimg2Alt: "liverpool",
        teamName2: "Liverpool",
        leagueName: "Europ League",
        date: "Saturday 16th September",
        time: "15:00",
        inquiryNumber: "545454421",
    },
]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'min(100% - 0px , 600px)',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    padding: '10px 30px',
};
const TeamsMatches = () => {
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
                    <Typography variant='h5' sx={{ fontSize: "25px", fontWeight: "600" }}>Temas Matches</Typography>
                    <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />} ><span style={{ marginTop: "3px" }}>add</span></Button>
                </Box>
                <Divider />

                <Box sx={{ py: 1, my: 2 }}>
                    <Grid container spacing={2}>
                        {teamsvsapi.map((curEle, i) => {
                            const { teamimg1, teamimg1Alt, teamimg2, teamimg2Alt, teamName1, teamName2, leagueName, date, time, inquiryNumber } = curEle
                            return (
                                <Grid item lg={12} sx={{ my: 1, }}>
                                    <Grid container>

                                        <Grid item lg={4} sm={12} xs={12}>
                                            <Grid container spacing={2} justifyContent="center">
                                                <Grid item lg={4} xs={3}>
                                                    <Box><img src={teamimg1} alt={teamimg1Alt} width="100%" height="70px" style={{ objectFit: "contain" }} /></Box>
                                                    <Typography sx={{ textAlign: "center", fontWeight: "600" }}>{teamName1}</Typography>
                                                </Grid>
                                                <Grid item lg={4} xs={3}>
                                                    <img src={vs} alt="vs" width="100%" height="70px" style={{ objectFit: "contain" }} />
                                                </Grid>
                                                <Grid item lg={4} xs={3}>
                                                    <Box><img src={teamimg2} alt={teamimg2Alt} width="100%" height="70px" style={{ objectFit: "contain" }} /></Box>
                                                    <Typography sx={{ textAlign: "center", fontWeight: "600" }}>{teamName2}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={6} xs={12} sx={{ my: "auto" }}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item lg={6} >
                                                    <Typography sx={{ fontWeight: 600, mb: 1 }}>League Name : <span>{leagueName}</span></Typography>
                                                    <Typography sx={{ fontWeight: 600, mb: 1 }}>Date : <span>{date}</span></Typography>
                                                </Grid>
                                                <Grid item lg={6}>
                                                    <Typography sx={{ fontWeight: 600, mb: 1 }}>Time : <span>{time}</span></Typography>
                                                    <Typography sx={{ fontWeight: 600, mb: 1 }}>Inquiry Number : <span>{inquiryNumber}</span></Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={2} xs={12}>
                                            <Box sx={{
                                                display: "grid", justifyContent: "end",
                                                '@media (max-width: 991px)': {
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
                                    <Divider sx={{ mt: 2 }} />
                                </Grid>

                            )
                        })}
                    </Grid>
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
                                            style={{ height: 100, width: 120 }}
                                        />
                                    )}
                                </IconButton>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <Box >
                                    <label htmlFor="team1" style={{ fontSize: "17px", fontWeight: "600" }}>Select Team 1 :</label>
                                    <input list="team1" className='text-input' placeholder='select team 1' />
                                    <datalist id="team1">
                                        <option value="Chelsea" />
                                        <option value="ArsenalFC" />
                                        <option value="Manchester City" />
                                        <option value="Tottenham Hotspur" />
                                        <option value="Liverpool" />
                                    </datalist>
                                </Box>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <Box >
                                    <label htmlFor="team2" style={{ fontSize: "17px", fontWeight: "600" }}>Select Team 2 :</label>
                                    <input list="team2" className='text-input' placeholder='select team 2' />
                                    <datalist id="team2">
                                        <option value="Chelsea" />
                                        <option value="ArsenalFC" />
                                        <option value="Manchester City" />
                                        <option value="Tottenham Hotspur" />
                                        <option value="Liverpool" />
                                    </datalist>
                                </Box>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <Box >
                                    <label htmlFor="League-Name" style={{ fontSize: "17px", fontWeight: "600" }}>League Name :</label>
                                    <input type="text" id="League-Name" width="100%" className='text-input' placeholder='Enter league name' />
                                </Box>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <Box >
                                    <label htmlFor="time" style={{ fontSize: "17px", fontWeight: "600" }}>Time :</label>
                                    <input type="time" id="time" width="100%" className='text-input' />
                                </Box>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <Box >
                                    <label htmlFor="date" style={{ fontSize: "17px", fontWeight: "600" }}>Date :</label>
                                    <input type="date" id="date" width="100%" className='text-input' />
                                </Box>
                            </Grid>
                            <Grid item lg={6} xs={6}>

                                <Box >
                                    <label htmlFor="Inquiry-Number" style={{ fontSize: "17px", fontWeight: "600" }}>Inquiry Number :</label>
                                    <input type="text" id="Inquiry-Number" width="100%" className='text-input' placeholder='Enter inquiry number' />
                                </Box>
                            </Grid>
                            <Grid item lg={12} xs={12}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }} >
                                    <Button variant='outlined' onClick={handleClose} sx={{ width: '45%', fontSize: "17px", fontWeight: "500" }}>Cancel</Button>
                                    <Button variant='contained' sx={{ width: '45%', fontSize: "17px", fontWeight: "500" }}>Save</Button>
                                </Box>
                            </Grid>

                        </Grid>

                    </Box>
                </Modal>
            </WhitecardBox>


        </Box>

    )
}

export default TeamsMatches
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];