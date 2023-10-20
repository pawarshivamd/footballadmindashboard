import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import bg from "../../imgs/login bg/bg.jpg";
import logo from '../../imgs/logo/logo.svg'; 
import { Link, } from 'react-router-dom';
import { Button, } from '@mui/material';



const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Typography sx={{ width:"100%", minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',background: ` url(${bg}) ` , backgroundSize:"cover"  }} component='div'>
            <Card sx={{ minWidth: 350, marginInline: 'auto',  padding: 3, boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <Box
                    component="div"
                    sx={{  width: '120px', py:2, marginInline: 'auto' }}
                >
                    <img src={logo} alt="Logo" width="100%" height="100%" />
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <Typography component="div" sx={{mt:2 , textAlign:'center'}} >
                    Enter your Email Address
                </Typography>
                    <FormControl sx={{ mt: 3, Width:"100%" }} variant="outlined" fullWidth  >
                        <InputLabel htmlFor="outlined-adornment-Email" >Email</InputLabel>
                        <OutlinedInput
                            
                            type='Email'
                            placeholder='Enter your Email'
                            id="outlined-adornment-Email"
                            label="Email"
                        />
                    </FormControl>

                    <Box sx={{ mt: 2,textAlign:"center" }} >
                        <Button variant="contained"to="/otp" component={Link}   type='submit'>Submit</Button>
                    </Box>
                </Box>
            </Card>
        </Typography>
    );
}

export default ForgotPassword;
