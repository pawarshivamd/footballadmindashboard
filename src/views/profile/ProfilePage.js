import React, { useState } from 'react'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { WhitecardBox } from '../Stadium Tours/StadiumTours';

const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [showConPassword, setShowConPassword] = useState(false);
  const [Conpassword, setConPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConPassword = () => {
    setShowConPassword(!showConPassword);
  };
  const handleMouseDownConPassword = (event) => {
    event.preventDefault();
  };
  return (

    <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
      <WhitecardBox>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>

            <Grid item lg={4} md={6} sm={12} xs={12}>

              <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth   >
                <InputLabel htmlFor="name" >Name</InputLabel>
                <OutlinedInput
                  placeholder=''
                  id=""
                  label="name"
                  value="Alexandru"
                />
              </FormControl>

            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>

              <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-Email" >Email</InputLabel>
                <OutlinedInput
                  placeholder='Enter your Email'
                  id="outlined-adornment-Email"
                  label="Email"
                  type='email'
                  value="alexandru765@gmail.com"
                />
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>

              <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="mobile-number" >Mobile Number</InputLabel>
                <OutlinedInput
                  placeholder=''
                  id=""
                  label="mobile-number"
                  value="727519354"
                />
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>

              <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                <OutlinedInput
                  placeholder='Enter your Password'
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton

                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility color='primary' /> : <VisibilityOff color='primary' />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"

                />
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="confirm-password" > Confirm Password</InputLabel>
                <OutlinedInput
                  placeholder='Enter your Password'
                  id="outlined-adornment-password"
                  type={showConPassword ? 'text' : 'password'}
                  value={Conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton

                        aria-label="toggle password visibility"
                        onClick={handleClickShowConPassword}
                        onMouseDown={handleMouseDownConPassword}
                        edge="end"
                      >
                        {showConPassword ? <Visibility color='primary' /> : <VisibilityOff color='primary' />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="confirm-Password"

                />
              </FormControl>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography sx={{ mt: 3, width: "150px", marginLeft: "auto" }} >
                <Button variant="contained" fullWidth to="/user-details" >Save</Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </WhitecardBox>
    </Box>
  )
}

export default ProfilePage
