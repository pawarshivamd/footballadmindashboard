import React, { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  FormHelperText,
} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MapIcon from "@mui/icons-material/Map"
import { WhitecardBox } from "../Stadium Tours/StadiumTours"
import { useDispatch, useSelector } from "react-redux"
import { getDynamics, setDynamics } from "../../actions/userActions"
import Loader from "../common/loader/Loader"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  instagram: Yup.string().required("Required"),
  whatsapp: Yup.string()
    .matches(/^\d+$/, "Invalid WhatsApp number")
    .required("Required"),
  address: Yup.string().required("Required"),
  map_link: Yup.string().url("Invalid URL").required("Required"),
})

const Dynamics = () => {
  const dispatch = useDispatch()
  const { dynamics, loading } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getDynamics())
  }, [])

  if (loading) return <Loader />
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        background: "transparent",
        height: "100%",
        mt: "64px",
      }}
    >
      <WhitecardBox>
        <Formik
          initialValues={{
            ...dynamics,
          }}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            // Add form submission logic here
            dispatch(setDynamics(values))
          }}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Email Field */}
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.email && Boolean(errors.email)}
                  >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="email"
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      }
                      label="Email"
                    />
                    <FormHelperText>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                {/* Instagram Field */}
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.instagram && Boolean(errors.instagram)}
                  >
                    <InputLabel htmlFor="instagram">Instagram</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="instagram"
                      startAdornment={
                        <InputAdornment position="start">
                          <InstagramIcon />
                        </InputAdornment>
                      }
                      label="Instagram"
                    />
                    <FormHelperText>
                      {touched.instagram && errors.instagram}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                {/* WhatsApp Field */}
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.whatsapp && Boolean(errors.whatsapp)}
                  >
                    <InputLabel htmlFor="whatsapp">WhatsApp</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="whatsapp"
                      startAdornment={
                        <InputAdornment position="start">
                          <WhatsAppIcon />
                        </InputAdornment>
                      }
                      label="WhatsApp"
                    />
                    <FormHelperText>
                      {touched.whatsapp && errors.whatsapp}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                {/* Address Field */}
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.address && Boolean(errors.address)}
                  >
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="address"
                      startAdornment={
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      }
                      label="Address"
                    />
                    <FormHelperText>
                      {touched.address && errors.address}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                {/* Map Link Field */}
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.map_link && Boolean(errors.map_link)}
                  >
                    <InputLabel htmlFor="map-link">Map Link</InputLabel>
                    <Field
                      as={OutlinedInput}
                      name="map_link"
                      startAdornment={
                        <InputAdornment position="start">
                          <MapIcon />
                        </InputAdornment>
                      }
                      label="Map Link"
                    />
                    <FormHelperText>
                      {touched.map_link && errors.map_link}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={!dirty}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </WhitecardBox>
    </Box>
  )
}

export default Dynamics
