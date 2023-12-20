import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { WhitecardBox } from "../Stadium Tours/StadiumTours";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../common/loader/Loader";
import { updateUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(/^\d+$/, "Invalid mobile number")
    .required("Required"),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userData, loading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log(1);
    const datastorage = localStorage.getItem("auth_token");
    if (!datastorage) {
      navigate("/");
    }
  }, []);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConPassword = () => {
    setShowConPassword(!showConPassword);
  };
  const handleMouseDownConPassword = (event) => {
    event.preventDefault();
  };
  if (loading) return <Loader />;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        my: 10,
        background: "transparent",
        height: "100%",
      }}
    >
      <WhitecardBox>
        <Formik
          enableReinitialize
          initialValues={{
            ...userData,
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const { password } = values;
            if (!password) {
              delete values.password;
              delete values.confirmPassword;
            }
            setSubmitting(false);
            dispatch(updateUser(values));
          }}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <FormControl
                    sx={{ mt: 5 }}
                    variant="outlined"
                    fullWidth
                    error={touched.name && Boolean(errors.name)}
                  >
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="name"
                      placeholder=""
                      label="Name"
                    />
                    {touched.name && errors.name && (
                      <FormHelperText>{errors.name}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                {/* Email Field */}
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <FormControl
                    sx={{ mt: 5 }}
                    variant="outlined"
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                  >
                    <InputLabel htmlFor="outlined-adornment-Email">
                      Email
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="email"
                      placeholder="Enter your Email"
                      type="email"
                      label="Email"
                    />
                    {touched.email && errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                {/* Mobile Number Field */}
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <FormControl
                    sx={{ mt: 5 }}
                    variant="outlined"
                    fullWidth
                    error={touched.mobile && Boolean(errors.mobile)}
                  >
                    <InputLabel htmlFor="mobile-number">
                      Mobile Number
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="mobile"
                      placeholder=""
                      label="Mobile Number"
                    />
                    {touched.mobile && errors.mobile && (
                      <FormHelperText>{errors.mobile}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                {/* Password Field */}
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <FormControl
                    sx={{ mt: 5 }}
                    variant="outlined"
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.password && errors.password && (
                      <FormHelperText>{errors.password}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                {/* Confirm Password Field */}
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <FormControl
                    sx={{ mt: 5 }}
                    variant="outlined"
                    fullWidth
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                  >
                    <InputLabel htmlFor="confirm-password">
                      Confirm Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="confirmPassword"
                      type={showConPassword ? "text" : "password"}
                      label="Confirm Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConPassword}
                            onMouseDown={handleMouseDownConPassword}
                            edge="end"
                          >
                            {showConPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <FormHelperText>{errors.confirmPassword}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {/* Submit Button */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography sx={{ mt: 3, width: "80px", marginLeft: "auto" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={!dirty}
                    >
                      Save
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </WhitecardBox>
    </Box>
  );
};

export default ProfilePage;
