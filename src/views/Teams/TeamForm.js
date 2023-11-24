import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
} from "@mui/material"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"
import { useEffect, useState } from "react"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { createTeam, deleteTeam, updateTeam } from "../../actions/teamsActions"

const style = {
  width: "min(100% - 0px , 400px)",
  margin: "0 auto",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "10px 30px",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Team Name is required"),
  primary_color: Yup.string()
    .matches(/^#([A-Fa-f0-9]{6})$/, "Must be valid hex color")
    .required("Primary color is required"),
  secondary_color: Yup.string()
    .matches(/^#([A-Fa-f0-9]{6})$/, "Must be valid hex color")
    .required("Secondary color is required"),
  image: Yup.string().required("Image is required"),
})

const TeamForm = ({ handleClose, activeTeam, setactiveTeam }) => {
  const dispatch = useDispatch()

  const [image, setImage] = useState(null)
  const [isImageSelected, setImageSelected] = useState(false)

  const changeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
      setactiveTeam((oldState) => {
        return { ...oldState, file: file, image: imageURL }
      })
      setImageSelected(true)
    }
  }

  useEffect(() => {
    return () => {
      setactiveTeam({
        name: "",
        primary_color: "",
        secondary_color: "",
        team_logo: "",
      })
    }
  }, [])

  return (
    <Box sx={style}>
      <Formik
        initialValues={{
          ...activeTeam,
          primary_color: `#${activeTeam?.primary_color}`,
          secondary_color: `#${activeTeam?.secondary_color}`,
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.primary_color = values.primary_color.split("#")[1]
          values.secondary_color = values.secondary_color.split("#")[1]
          values.image = values.file
          delete values.file
          const formData = new FormData()
          // Append all form values to formData
          for (const key in values) {
            if (values.hasOwnProperty(key)) {
              formData.append(key, values[key])
            }
          }
          activeTeam?.id
            ? dispatch(updateTeam(formData))
            : dispatch(createTeam(formData))
          handleClose()
          setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              {/* Other Grid Items for Image Upload */}

              <Grid item lg={12} xs={12}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  style={{
                    margin: "0 auto",
                    display: "block",
                    borderRadius: 0,
                  }}
                >
                  <input
                    hidden
                    name="image"
                    accept="image/*"
                    type="file"
                    onChange={changeImage}
                  />
                  {image ? (
                    <>
                      {isImageSelected && (
                        <HighlightOffOutlinedIcon
                          sx={{
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                          }}
                          onClick={() => {
                            setImage(null)
                            setImageSelected(false)
                          }}
                        />
                      )}
                      <img
                        src={image}
                        alt="Selected"
                        style={{ height: "auto", width: 120 }}
                      />
                    </>
                  ) : (
                    <img
                      src={
                        "https://assets.upload.io/website/blog_assets/icons/material/icons/add_photo_alternate_outlined.svg"
                      }
                      alt=""
                      style={{ height: 200, width: 200 }}
                    />
                  )}
                </IconButton>{" "}
              </Grid>
              <FormControl fullWidth>
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {errors.image && errors.image}
                </FormHelperText>
              </FormControl>
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="text"
                    name="name"
                    label="Team Name :"
                    placeholder="Enter Team Name"
                    variant="filled"
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name}
                  />
                </FormControl>
              </Grid>
              {/* Primary Color Field */}
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="color"
                    name="primary_color"
                    label="Primary :"
                    variant="filled"
                    error={touched.primary_color && errors.primary_color}
                    helperText={touched.primary_color && errors.primary_color}
                  />
                </FormControl>
              </Grid>
              {/* Secondary Color Field */}
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="color"
                    name="secondary_color"
                    label="Secondary :"
                    variant="filled"
                    error={touched.secondary_color && errors.secondary_color}
                    helperText={
                      touched.secondary_color && errors.secondary_color
                    }
                  />
                </FormControl>
              </Grid>
              {/* Buttons */}
              <Grid item lg={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 2,
                    justifyContent: "end",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 1,
                      width: "25%",
                      fontSize: "17px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      width: "25%",
                      fontSize: "17px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default TeamForm
