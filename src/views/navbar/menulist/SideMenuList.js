import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
const SideMenuList =[
  { 

    id:1,
    path: "/user",
    label: "Users",
    icon: <GroupOutlinedIcon color='primary' />,
   },
   { 
    id:2,
    path: "/candidates",
    label: "Candidates",
    icon: <GroupsOutlinedIcon color='primary' />,
   },
   { 
    id:3,
    path: "",
    label: "Reports",
    icon: <LibraryBooksOutlinedIcon color='primary' />,
   },
   { 
    id:4,
    path: "",
    label: "Settings",
    icon: <SettingsOutlinedIcon color='primary' />,
   },
]


export default SideMenuList
