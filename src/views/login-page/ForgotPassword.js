import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import bg from "../../imgs/login bg/bg.png";
import logo from "../../imgs/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import api from "../../API/api";
import Notification from "../common/Notifications";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log(email);
  const handleSubmit = async () => {
    try {
      const response = await api.post("/adminForgotPassword", { email: email });

      if (response) {
        Notification(
          "success",
          "New password sent on registered email. Please check email for more details."
        );
      }
      //   window.location.href = "/otp";
      navigate("/otp");
    } catch (error) {
      Notification("error", error);
    }

    // return true;
  };
  return (
    <Typography
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ` url(${bg}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      component="div"
    >
      <Card
        sx={{
          width: "min(100% - 0px , 320px)",
          marginInline: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          position: "relative",
          padding: "30px 20px",
          overflow: "visible ",
        }}
      >
        <Box
          sx={{
            width: "150px",
            position: "absolute",
            top: "-24px",
            left: "50%",
            right: "50%",
            transform: " translate(-50% , -50%)",
            borderRadius: " 7px",
          }}
        >
          <img src={logo} alt="Logo" width="100%" height="100%" />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            component="div"
            sx={{ mt: 2, textAlign: "center", fontWeight: "600" }}
          >
            Enter your Email Address
          </Typography>
          <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-Email">Email</InputLabel>
            <OutlinedInput
              placeholder="Enter your Email"
              id="outlined-adornment-Email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // error={errors.email !== ''}
            />
            {/* {errors.email && <Typography variant="caption" color="error">{errors.email}</Typography>} */}
          </FormControl>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Button
              variant="contained"
              //   to="/otp"
              sx={{ fontWeight: "600" }}
              component={Link}
              type="submit"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Card>
    </Typography>
  );
};

export default ForgotPassword;
