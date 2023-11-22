import { Box, Button, FormControl, Grid, IconButton } from "@mui/material"
import { Inputcustom } from "../Teams Matches/TeamsMatches"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined"
import { useState } from "react"

const style = {
  width: "min(100% - 0px , 400px)",
  margin: "0 auto",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "10px 30px",
}

const TeamForm = ({ handleClose }) => {
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

  return (
    <Box sx={style}>
      <Grid container spacing={2}>
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
            <input hidden accept="image/*" type="file" onChange={changeImage} />
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
                  alt="Selected Image"
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
              id="team-name"
              label="Team Name :"
              placeholder="Enter Team Name"
              variant="filled"
            />
          </FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={6}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="color"
              id="Primary-color"
              label="Primary :"
              variant="filled"
            />
          </FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={6} xlOffset={4}>
          <FormControl fullWidth>
            <Inputcustom
              InputLabelProps={{ shrink: true }}
              type="color"
              id="secondry-color"
              label="Secondry :"
              variant="filled"
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
              variant="contained"
              sx={{
                width: "25%",
                fontSize: "17px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
              onClick={handleClose}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TeamForm
