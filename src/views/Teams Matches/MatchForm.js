import React, { useEffect } from "react";
import { Box, Button, FormControl, Grid } from "@mui/material";
import Inputcustom from "../common/fields/Inputcustom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TeamSelect from "../common/fields/TeamSelect ";
import { useDispatch } from "react-redux";
import { createMatch, updateMatch } from "../../actions/matchActions";

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
};

const validationSchema = Yup.object().shape({
  league: Yup.string().required("League Name is required"),
  whatsapp: Yup.string()
    .matches(/^[0-9]+$/, "Please enter a valid number")
    .required("Please enter a valid number")
    .max(10, "Inquiry Number must be exactly 10 digits")
    .min(10, "Inquiry Number must be exactly 10 digits"),
  date: Yup.date()
    .required("Date is required")
    .nullable()
    .min(
      new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // Set the minimum date to one day before today
      "Date must not be older than today's date"
    ),
  // .min(new Date(), "Date must not be older than a today's date"),
  time: Yup.string().required("Time is required"),
  host: Yup.string().required("Team selection is required"),
  opponent: Yup.string()
    .required("Team selection is required")
    .test("notEqual", "Teams cannot be same", function (value) {
      return value !== this.parent.host;
    }),
});

const MatchForm = ({ handleClose, editData }) => {
  let opponent;
  let host;
  const dispatch = useDispatch();
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    console.log(`${day - 1}-${month}-${year}`);
    return `${day - 1}-${month}-${year}`;
  };

  useEffect(() => {
    if (editData.id) {
      opponent = {
        label: editData.opponent,
        value: editData.opponent_id,
      };
      host = { label: editData.host, value: editData.host_id };
    }
  }, []);

  const today = new Date();
  return (
    <Formik
      initialValues={{
        league: editData?.league ? editData.league : "",
        whatsapp: editData?.whatsapp ? editData.whatsapp : "",
        date: editData?.date ? editData.date : "",
        time: editData?.time ? editData.time : "",
        host: editData?.host_id ? editData.host_id : "",
        opponent: editData?.opponent_id ? editData.opponent_id : "",
        ...(editData?.id && { id: editData.id }),
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        dispatch(createMatch(values));
        setSubmitting(false);
        handleClose();
        // Handle form submission here
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <Field
                  name="host"
                  component={TeamSelect}
                  label="Select Host"
                  value={editData?.host_id}
                />
                <ErrorMessage
                  name="host"
                  component="div"
                  style={{ color: "#d32f2f" }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="opponent"
                  component={TeamSelect}
                  label="Select Team Opponent"
                  value={editData?.opponent_id}
                />
                <ErrorMessage
                  name="opponent"
                  component="div"
                  style={{ color: "#d32f2f" }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="text"
                    name="league"
                    label="League Name :"
                    variant="filled"
                    placeholder="Enter League Name"
                    InputLabelProps={{ shrink: true }}
                  />
                  <ErrorMessage
                    name="league"
                    component="div"
                    style={{ color: "#d32f2f" }}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth>
                  <Field
                    as={Inputcustom}
                    type="number"
                    name="whatsapp"
                    label="Inquiry Number :"
                    placeholder="Enter Inquiry Number"
                    variant="filled"
                    InputLabelProps={{ shrink: true }}
                    // inputProps={{ maxContentLength: 10 }}
                  />
                  <ErrorMessage
                    name="whatsapp"
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
                    // min={minDate}
                    readOnly={true}
                    label="Date :"
                    variant="filled"
                    // min={new Date().toISOString().split("T")[0]}
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
                      paddingTop:"9px"
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
                      width: "15%",
                      fontSize: "17px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      paddingTop:"9px"
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
  );
};

export default MatchForm;
