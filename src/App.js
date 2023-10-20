
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/login-page/Login';
import ForgotPassword from './views/login-page/ForgotPassword';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { Box,} from '@mui/material';
import Navbar from './views/navbar/topmenu/Navbar';
import ProfilePage from './views/profile/ProfilePage';
import Error from './views/error/Error';
import MaybeShowNav from './views/MaybeShowNav';
import StadiumTours from './views/Stadium Tours/StadiumTours';
import TeamsMatches from './views/Teams Matches/TeamsMatches';
import Teams from './views/Teams/Teams';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#172945',
    },
    secondary: {
      main: '#D8C65D', 
    },
  },
  typography: {
    fontFamily: [
      'DIN Next LT Pro',
    ].join(','),
  },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
         <Box component="div" sx={{ display: "flex", background: "#eef2f6", width:"100%"  }}>
        <MaybeShowNav>
            <Navbar/>
        </MaybeShowNav>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/tems" element={<Teams/>}/>
            <Route path="/stadium-tours" element={<StadiumTours  />} />
            <Route path="/teams-matches" element={<TeamsMatches/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="*" element={<Error/>}/>
        </Routes>
        </Box>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
