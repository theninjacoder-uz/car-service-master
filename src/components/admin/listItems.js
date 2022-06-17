import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CameraFrontSharpIcon from '@mui/icons-material/CameraFrontSharp';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LogoutIcon from '@mui/icons-material/Logout';


const MainListItems = ({state, handleState}) =>
{
    const navigation = useNavigate();

    function handleLogout(){
        navigation("/login");
    }

    return (
        <React.Fragment>
            <ListItemButton selected={state[0]} onClick={() => handleState(0)}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Asosiy menu"/>
            </ListItemButton>
            <ListItemButton selected={state[1]} onClick={() => handleState(1)}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Foydalanuvchilar"/>
            </ListItemButton>
            <ListItemButton selected={state[2]} onClick={() => handleState(2)}>
                <ListItemIcon>
                    <CameraFrontSharpIcon/>
                </ListItemIcon>
                <ListItemText primary="Xodimlar"/>
            </ListItemButton>
            <ListItemButton selected={state[3]} onClick={() => handleState(3)}>
                <ListItemIcon>
                    <MiscellaneousServicesIcon/>
                </ListItemIcon>
                <ListItemText primary="Servislar"/>
            </ListItemButton>
            <ListItemButton selected={state[2]} onClick={() => handleState(2)}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Logout" onClick={handleLogout}/>
            </ListItemButton>
        </React.Fragment>);
};
export default MainListItems;