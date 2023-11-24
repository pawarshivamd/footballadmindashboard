import React, { useState, useEffect } from "react"
import { Box, Button, FormControl, Grid, IconButton } from "@mui/material"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import uplodimg from "../../imgs/stadium/uplodimg.jpg"
import { useDispatch } from "react-redux"
import { createStadium, updateStadium } from "../../actions/stadiumActions"

const style = {
  width: "min(100% - 0px , 400px)",
  margin: "0 auto",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "10px 30px",
}

const validationSchema = Yup.object().shape({
  team: Yup.string().required("Team required"),
  stadium: Yup.string().required("Stadium is required"),
  number: Yup.string().required("Inquiry Number is required"),
})

const StadiumForm = ({ activeStadium, handleClose, setactiveStadium }) => {
  const dispatch = useDispatch()

  const [image, setImage] = useState(null)
  const [isImageSelected, setImageSelected] = useState(false)

  const changeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
      setactiveStadium((oldState) => {
        return { ...oldState, file: file, image: imageURL }
      })
      setImageSelected(true)
    }
  }

  useEffect(() => {
    return () => {
      setactiveStadium({
        number: "",
        photo: "",
        stadium: "",
        team: "",
      })
    }
  }, [])

  return (
    <Box sx={style}>
      <Formik
        initialValues={{
          name: activeStadium.name || "",
          team: activeStadium.team || "",
          stadium: activeStadium.stadium || "",
          number: activeStadium.number || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.image = values.file
          delete values.file
          const formData = new FormData()
          // Append all form values to formData
          for (const key in values) {
            if (values.hasOwnProperty(key)) {
              formData.append(key, values[key])
            }
          }
          activeStadium?.id
            ? dispatch(updateStadium(formData))
            : dispatch(createStadium(formData))
          handleClose()
          setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            {console.log({ errors })}
            <Grid container spacing={2}>
              {/* Image Upload and other fields... */}
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
                      src={uplodimg}
                      alt=""
                      style={{ height: 200, width: 200 }}
                    />
                  )}
                </IconButton>
              </Grid>
              {/* Stadium Name Field */}
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    name="stadium"
                    type="text"
                    label="Stadium Name :"
                    placeholder="Enter Stadium Name"
                    variant="filled"
                    error={touched.stadium && errors.stadium}
                    helperText={touched.stadium && errors.stadium}
                  />
                </FormControl>
              </Grid>

              {/* Team Name Field */}
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    name="team"
                    type="text"
                    label="Team Name :"
                    placeholder="Enter Team Name"
                    variant="filled"
                    error={touched.team && errors.team}
                    helperText={touched.team && errors.team}
                  />
                </FormControl>
              </Grid>

              {/* Inquiry Number Field */}
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    name="number"
                    type="text"
                    label="Inquiry Number :"
                    placeholder="Enter Inquiry Number"
                    variant="filled"
                    error={touched.number && errors.number}
                    helperText={touched.number && errors.number}
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

export default StadiumForm
