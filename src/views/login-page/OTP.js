import { Box, Button, Card, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import logo from '../../imgs/logo/logo.svg'; 
import bg from "../../imgs/login bg/bg.jpg";
const OTP = () => {
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
            Enter your OTP
        </Typography>
            <FormControl sx={{ mt: 3, Width:"100%" }} variant="outlined" fullWidth >
                <InputLabel htmlFor="outlined-adornment-Email" >OTP</InputLabel>
                <OutlinedInput
                    placeholder='Enter your OTP'
                    id="outlined-adornment-otp"
                    label="OTP"
                    type='Number'
                    inputProps={{ minLength: 4 }}
                    required
                />
            </FormControl>

            <Box sx={{ mt: 2,textAlign:"center" }} >
                <Button variant="contained"   type='submit'>Submit</Button>
            </Box>
        </Box>
    </Card>
</Typography>
  )
}

export default OTP
