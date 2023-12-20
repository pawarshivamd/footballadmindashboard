import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { WhitecardBox } from "../Stadium Tours/StadiumTours";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteConfirmationPopup from "../common/modal/Alert";
import { deleteTeam, fetchTeams } from "../../actions/teamsActions";
import Loader from "../common/loader/Loader";
import CommonModal from "../common/modal/CommonModal";
import TeamCard from "./TeamCard";
import TeamForm from "./TeamForm";

const Teams = () => {
  const dispatch = useDispatch();
  const { teamsData, loading } = useSelector((state) => state.teams);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [activeTeam, setactiveTeam] = useState({
    name: "",
    primary_color: "",
    secondary_color: "",
    team_logo: "",
  });

  const handleDelete = () => {
    if (activeTeam?.id) {
      dispatch(deleteTeam(activeTeam?.id));
      setDeleteModal(false);
      setactiveTeam({
        name: "",
        primary_color: "",
        secondary_color: "",
        team_logo: "",
      });
    }
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

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
            sx={{ fontSize: "25px", fontWeight: "600" }}
            color="primary"
          >
            Teams
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
          <Box sx={{ py: 1 }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {teamsData.map((team, index) => {
                return (
                  <TeamCard
                    team={team}
                    openDeletemodal={() => setDeleteModal(true)}
                    handleOpenTeamModal={() => setModalOpen(true)}
                    setactiveTeam={setactiveTeam}
                  />
                );
              })}
            </Grid>
          </Box>
        </Box>
        <CommonModal open={modalOpen} handleClose={() => setModalOpen(false)}>
          <TeamForm
            handleClose={() => {
              setModalOpen(false);
              setactiveTeam({
                name: "",
                primary_color: "",
                secondary_color: "",
                team_logo: "",
              });
            }}
            activeTeam={activeTeam}
            setactiveTeam={setactiveTeam}
          />
        </CommonModal>
        <DeleteConfirmationPopup
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          onConfirm={handleDelete}
          setactiveTeam={setactiveTeam}
        />
      </WhitecardBox>
    </Box>
  );
};

export default Teams;
