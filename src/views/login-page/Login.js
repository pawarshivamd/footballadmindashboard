import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import bg from "../../imgs/login bg/bg.png"
import logo from "../../imgs/logo/logo.svg"
import { Link, Link as RouterLink } from "react-router-dom"
import { Button } from "@mui/material"
import { loginUser } from "../../actions/userActions"
import { useDispatch } from "react-redux"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

const Login = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Typography
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${bg})`,
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
            transform: "translate(-50% , -50%)",
            borderRadius: "7px",
          }}
        >
          <img src={logo} alt="Logo" width="100%" height="100%" />
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(false)
            dispatch(loginUser(values))
            // Add your login logic here
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-Email">
                  Email
                </InputLabel>
                <Field
                  as={OutlinedInput}
                  name="email"
                  placeholder="Enter your Email"
                  id="outlined-adornment-Email"
                  type="email"
                  error={touched.email && Boolean(errors.email)}
                />
                {touched.email && errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email}
                  </Typography>
                )}
              </FormControl>
              <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <Field
                  as={OutlinedInput}
                  name="password"
                  placeholder="Enter your Password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  error={touched.password && Boolean(errors.password)}
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
                  <Typography variant="caption" color="error">
                    {errors.password}
                  </Typography>
                )}
              </FormControl>
              <Typography
                style={{
                  textAlign: "end",
                  marginTop: "15px",
                  display: "block",
                }}
                color="primary"
                to="/forgot-password"
                component={RouterLink}
              >
                Forgot Password?
              </Typography>
              <Box sx={{ mt: 3, textAlign: "center" }} component="div">
                <Button
                  variant="contained"
                  sx={{ fontWeight: "600" }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Typography>
  )
}

export default Login
