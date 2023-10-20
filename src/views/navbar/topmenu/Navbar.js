import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {
  Avatar,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Hidden,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Logout,
} from "@mui/icons-material";
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const smallScreenBreakpoint = 991;
const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down(smallScreenBreakpoint)]: {
    width: 0, // Set the width to 0 on small screens
    
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // backgroundColor: alpha(theme.palette.primary.main, 0.15),
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const [openlist, setOpenlist] = useState(true);
  const [openDialogbox, setOpenDialogbox] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(!isScreenSmall);

  useEffect(() => {
    const handleResize = () => {
      setOpen(!isScreenSmall);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmall]);

  const handleCloseDialogbox = () => {
    setOpenDialogbox(false);
  };
  const navigate = useNavigate();
  const profileopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickOpenDialogbox = () => {
    setOpenDialogbox(true);
  };
  const handleClicklist = () => {
    setOpenlist((prevOpenlist) => !prevOpenlist);
  };
  
  // const [routes] = useState(SideMenuList);
  return (

    <Box >
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              App Tracker
            </Typography>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  setOpen(!open);
                }}
                edge="start"
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={profileopen ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={profileopen ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={profileopen}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>

                <AccountCircleOutlinedIcon fontSize="small" color="primary" />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>
          <Divider />
          <MenuItem onClick={handleClickOpenDialogbox}>
            <ListItemIcon>
              <Logout fontSize="small" color="primary" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </AppBar>



      <Drawer variant="permanent" open={open}>


        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
        <ListItem
            disablePadding
            sx={{ display: "block", border: "none", background: location.pathname === "/tems" ? "#d8e9ff" : "transparent", }}
            onClick={() => navigate("/tems")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", }}>
                <GroupOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Teams" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block", border: "none", background: location.pathname === "/stadium-tours" ? "#d8e9ff" : "transparent", }}
            onClick={() => navigate("/stadium-tours")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", }}>
                <GroupOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Stadium Tours" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block", border: "none", background: location.pathname === "/teams-matches" ? "#d8e9ff" : "transparent", }}
            onClick={() => navigate("/teams-matches")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center", }}>
                <GroupOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Teams Matches" sx={{ opacity: open ? 1 : 0 , fontSize:"22px" , fontWeight:"600" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Dialog
        open={openDialogbox}
        onClose={handleCloseDialogbox}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogbox}>No</Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>

  );
};

export default Navbar;