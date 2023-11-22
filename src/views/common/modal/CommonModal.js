import { Backdrop, Fade, Modal } from "@mui/material"

const CommonModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{children}</div>
    </Modal>
  )
}

export default CommonModal
