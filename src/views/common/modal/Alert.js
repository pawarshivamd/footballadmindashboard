import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function DeleteConfirmationPopup({
  open,
  onClose,
  onConfirm,
  setactiveTeam,
  setactiveStadium,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
            if (setactiveTeam) {
              setactiveTeam("");
            } else if (setactiveStadium) {
              setactiveStadium("");
            }
          }}
          color="primary"
          variant="outlined"
          sx={{paddingTop:"9px"}}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained"  sx={{paddingTop:"9px"}} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmationPopup;
