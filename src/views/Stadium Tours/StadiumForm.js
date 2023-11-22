import { Box, Button, FormControl, Grid, IconButton } from "@mui/material"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"
import { useEffect, useState } from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const style = {
  width: "min(100% - 0px , 400px)",
  margin: "0 auto",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "10px 30px",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Stadium Name is required"),
  team: Yup.string().required("Team required"),
  stadium: Yup.string().required("Stadium is required"),
  number: Yup.string().required("Inquiry Number is required"),
})

const StadiumForm = ({ activeStadium, handleClose, setactiveStadium }) => {
  const [image, setImage] = useState(null)
  const [isImageSelected, setImageSelected] = useState(false)
  const changeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
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

  console.log({ activeStadium })
  return (
    <Box sx={style}>
      <Formik
        initialValues={{
          ...activeStadium,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
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
                </IconButton>
              </Grid>

              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Inputcustom
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    id="tema-name"
                    label="Team Name :"
                    placeholder="Enter Team Name"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    component={Inputcustom}
                    name="PlaceName"
                    type="text"
                    label="Place Name :"
                    placeholder="Enter Place Name"
                    variant="filled"
                  />
                  <ErrorMessage name="PlaceName" component="div" />
                </FormControl>
              </Grid>
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                  <Field
                    component={Inputcustom}
                    name="name"
                    type="text"
                    label="Inquiry Number :"
                    placeholder="Enter Inquiry Number"
                    variant="filled"
                  />
                  <ErrorMessage name="name" component="div" />
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
