import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Pagination, Typography } from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { deleteStadium, fetchStadiums } from "../../actions/stadiumActions";
import Loader from "../common/loader/Loader";
import StadiumCard from "./StadiumCard";
import DeleteConfirmationPopup from "../common/modal/Alert";
import CommonModal from "../common/modal/CommonModal";
import StadiumForm from "./StadiumForm";

export const WhitecardBox = styled(Box)(() => ({
  background: "#ffffff",
  padding: "24px",
  borderRadius: "20px",
  marginInline: "32px",
  marginBottom: "16px",

  "@media (max-width: 768px)": {
    marginInline: "16px",
  },
}));

const StadiumTours = () => {
  const dispatch = useDispatch();
  const { stadiumData, loading } = useSelector((state) => state.stadium);
  const [currentPage, setCurrentPage] = useState(1);
  const stadiumsPerPage = 5;

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [activeStadium, setactiveStadium] = useState({
    number: "",
    photo: "",
    stadium: "",
    team: "",
  });

  // useEffect(() => {
  //   dispatch(
  //     fetchStadiums({
  //       start: 0,
  //       count: 5,
  //     })
  //   );
  // }, [dispatch]);
  useEffect(() => {
    fetchStadiumData();
  }, [currentPage]);

  const fetchStadiumData = () => {
    const start = (currentPage - 1) * stadiumsPerPage;
    dispatch(
      fetchStadiums({
        start,
        count: stadiumsPerPage,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteStadium(activeStadium?.id));
    setactiveStadium({ number: "", photo: "", stadium: "", team: "" });
    setDeleteModal(false);
  };
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%" }}
    >
      <WhitecardBox>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            py: "10px",
          }}
        >
          <Typography
            variant="h5"x
            color="primary"
            sx={{ fontSize: "25px", fontWeight: "600" }}
          >
            Stadium Tours
          </Typography>
          <Button
            variant="contained"
            onClick={() => setModalOpen(true)}
            startIcon={<AddIcon />}
          >
            <span style={{ marginTop: "3px" }}>add</span>
          </Button>
        </Box>
        <Divider />
        <Box>
          {stadiumData?.stadiums?.map((stadium) => (
            <StadiumCard
              data={stadium}
              key={stadium.id}
              openDeletemodal={() => {
                setactiveStadium(stadium);
                setDeleteModal(true);
              }}
              openStadiumModal={() => {
                setactiveStadium(stadium);
                setModalOpen(true);
              }}
            />
          ))}
        </Box>
        <Pagination
          count={Math.ceil(stadiumData?.total / stadiumsPerPage)}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          sx={{ display: "flex", justifyContent: "end", marginTop: "8px" }}
        />
        <CommonModal open={modalOpen} handleClose={() => setModalOpen(false)}>
          <StadiumForm
            handleClose={() => setModalOpen(false)}
            activeStadium={activeStadium}
            setactiveStadium={setactiveStadium}
          />
        </CommonModal>
        <DeleteConfirmationPopup
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          onConfirm={handleDelete}
        />
      </WhitecardBox>
    </Box>
  );
};

export default StadiumTours;
