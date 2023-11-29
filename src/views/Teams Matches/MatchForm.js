import React from "react"
import { Box, Button, FormControl, Grid } from "@mui/material"
import Inputcustom from "../common/fields/Inputcustom"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TeamSelect from "../common/fields/TeamSelect "

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(100% - 0px , 600px)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "40px 30px",
}

const validationSchema = Yup.object().shape({
  leagueName: Yup.string().required("League Name is required"),
  inquiryNumber: Yup.string().required("Inquiry Number is required"),
  date: Yup.date().required("Date is required").nullable(),
  time: Yup.string().required("Time is required"),
  team1: Yup.string().required("Team selection is required"),
  team2: Yup.string().required("Team selection is required"),
})

const MatchForm = () => {
  return (
    <Formik
      initialValues={{
        leagueName: "",
        inquiryNumber: "",
        date: "",
        time: "",
        team1: "",
        team2: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
        // Handle form submission here
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <Field
                  name="team1"
                  component={TeamSelect}
                  label="Select Team 1"
                />
                <ErrorMessage
                  name="team1"
                  component="div"
                  style={{ color: "#d32f2f" }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="team2"
                  component={TeamSelect}
                  label="Select Team 2"
                />
                <ErrorMessage
                  name="team2"
                  component="div"
                  style={{ color: "#d32f2f" }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="text"
                    name="leagueName"
                    label="League Name :"
                    variant="filled"
                    placeholder="Enter League Name"
                  />
                  <ErrorMessage
                    name="leagueName"
                    component="div"
                    style={{ color: "#d32f2f" }}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="text"
                    name="inquiryNumber"
                    label="Inquiry Number :"
                    placeholder="Enter Inquiry Number"
                    variant="filled"
                  />
                  <ErrorMessage
                    name="inquiryNumber"
                    component="div"
                    style={{ color: "#d32f2f" }}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="date"
                    name="date"
                    label="Date :"
                    variant="filled"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    style={{ color: "#d32f2f" }}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="time"
                    name="time"
                    label="Time :"
                    variant="filled"
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    style={{ color: "#d32f2f" }}
                  />
                </FormControl>
              </Grid>
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
                      width: "15%",
                      fontSize: "17px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                    onClick={
                      () => {} /* Replace with your actual event handler */
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      width: "15%",
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
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default MatchForm
