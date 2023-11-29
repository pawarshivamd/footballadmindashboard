import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
} from "@mui/material"

import { useEffect, useRef, useState } from "react"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { createTeam } from "../../actions/teamsActions"
import CancelIcon from "@mui/icons-material/Cancel"
import Cropper from "react-cropper"
import uplodimg from "../../imgs/teamslogo/team_upload.png"
import Inputcustom from "../common/fields/Inputcustom"

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
  // team_logo: Yup.string().required("Image is required"),
})

const TeamForm = ({ handleClose, activeTeam, setactiveTeam }) => {
  const dispatch = useDispatch()
  const cropperRef = useRef(null)

  const [image, setImage] = useState(null)
  const [imgBlob, setimgBlob] = useState(null)
  const [newImage, setnewImage] = useState(false)

  const changeImage = (file) => {
    setnewImage(true)
    setImage(URL.createObjectURL(file))
  }

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        // Ensure the blob is not null
        if (blob) {
          // Create a new File from the Blob
          const croppedFile = new File([blob], "cropped_image.jpg", {
            type: "image/jpeg",
            lastModified: Date.now(),
          })

          // Set the File object to your state
          setimgBlob(croppedFile)
        }
      }, "image/jpeg")
    }
  }

  useEffect(() => {
    if (activeTeam && activeTeam.team_logo) {
      setImage(
        `https://football.jennypoint.com/api/resources/images/${activeTeam.team_logo}`
      )
    }

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
          values.image = imgBlob
          if (!values.image) delete values.image

          const formData = new FormData()
          // Append all form values to formData
          for (const key in values) {
            if (values.hasOwnProperty(key)) {
              formData.append(key, values[key])
            }
          }
          dispatch(createTeam(formData))
          handleClose()
          setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting, dirty }) => (
          <Form>
            <Grid container spacing={2}>
              {/* Other Grid Items for Image Upload */}
              {console.log({ errors })}
              <Grid item lg={12} xs={12}>
                {newImage ? (
                  <Cropper
                    aspectRatio={1}
                    ref={cropperRef}
                    src={image}
                    guides={true}
                    crop={onCrop}
                  />
                ) : image ? (
                  <>
                    <IconButton
                      aria-label="delete"
                      sx={{
                        position: "absolute",
                        right: 32,
                        marginTop: "12px",
                        color: "#FFFFFF",
                      }}
                      onClick={() => {
                        setImage(null)
                      }}
                    >
                      <CancelIcon sx={{ path: { stroke: "black" } }} />
                    </IconButton>
                    <img
                      src={image}
                      alt=""
                      style={{
                        height: 200,
                        width: "100%",
                        borderRadius: "12px",
                        marginTop: "13px",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <IconButton
                      aria-label="delete"
                      sx={{
                        height: "200px",
                        width: "100%",
                        margin: "13px 0",
                        padding: 0,
                      }}
                      component="label"
                      color="primary"
                      variant="filledTonal"
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => changeImage(e.target.files[0])}
                      />
                      <img
                        src={uplodimg}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 6,
                        }}
                      />
                    </IconButton>
                  </>
                )}
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
                    disabled={!dirty}
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
