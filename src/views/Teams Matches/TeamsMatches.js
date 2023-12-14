import React, { useEffect, useState } from "react";
import { WhitecardBox } from "../Stadium Tours/StadiumTours";
import {
  Box,
  Button,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import vs from "../../imgs/icon/vs-png.webp.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "../../actions/matchActions";
import Loader from "../common/loader/Loader";
import CommonModal from "../common/modal/CommonModal";
import MatchForm from "./MatchForm";
import MatchBox from "./MatchBox";

const TeamsMatches = () => {
  const dispatch = useDispatch();

  const { matches, loading } = useSelector((state) => state.matches);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const stadiumsPerPage = 5;

  // useEffect(() => {
  //   dispatch(fetchMatches());
  // }, [dispatch]);

  useEffect(() => {
    fetchMatchesData();
  }, [currentPage]);

  const fetchMatchesData = () => {
    const start = (currentPage - 1) * stadiumsPerPage;
    dispatch(
      fetchMatches({
        start,
        count: stadiumsPerPage,
      })
    );
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
            variant="h5"
            color="primary"
            sx={{ fontSize: "25px", fontWeight: "600" }}
          >
            Teams Matches
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

        <Box sx={{ py: 1, my: 2 }}>
          <Grid container spacing={2}>
            {matches?.teamsData?.map((curEle, i) => {
              return <MatchBox match={curEle} setModalOpen={setModalOpen} />;
            })}
          </Grid>
        </Box>
        <Pagination
          count={Math.ceil(matches?.total / stadiumsPerPage)}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          sx={{ display: "flex", justifyContent: "end", marginTop: "8px" }}
        />
        <CommonModal open={modalOpen} handleClose={() => setModalOpen(false)}>
          <MatchForm handleClose={() => setModalOpen(false)} />
        </CommonModal>
      </WhitecardBox>
    </Box>
  );
};

export default TeamsMatches;
