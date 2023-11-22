import React, { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/material"
import MaybeShowNav from "./views/MaybeShowNav"

// Lazy imports
const Login = lazy(() => import("./views/login-page/Login"))
const ForgotPassword = lazy(() => import("./views/login-page/ForgotPassword"))
const Navbar = lazy(() => import("./views/navbar/Navbar"))
const ProfilePage = lazy(() => import("./views/profile/ProfilePage"))
const StadiumTours = lazy(() => import("./views/Stadium Tours/StadiumTours"))
const TeamsMatches = lazy(() => import("./views/Teams Matches/TeamsMatches"))
const Teams = lazy(() => import("./views/Teams/Teams"))

export const theme = createTheme({
  palette: {
    primary: {
      main: "#172945",
    },
    secondary: {
      main: "#D8C65D",
    },
  },
  typography: {
    fontFamily: ["DIN Next LT Pro"].join(","),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box
          component="div"
          sx={{
            display: "flex",
            background: "#eef2f6",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <MaybeShowNav>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
            </Suspense>
          </MaybeShowNav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/stadium-tours" element={<StadiumTours />} />
              <Route path="/teams-matches" element={<TeamsMatches />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
