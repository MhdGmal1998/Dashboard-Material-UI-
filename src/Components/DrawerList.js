import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    MoveToInbox as InboxIcon,
    Mail as MailIcon,
    Home as HomeIcon,
    Person as PersonIcon,
    MobileFriendly as MobileFriendlyIcon,
    MobileOff as MobileOffIcon,
    Settings as SettingsIcon

}
    from '@mui/icons-material'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import List from '@mui/material/List';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setActiveDrawerList, setDrawer } from './../Redux/Slices/designSlice'
import { useTheme } from "@mui/material/styles";
export default () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.design)
    const navigate = useNavigate()
    const theme = useTheme()

    // console.log()

    const List1Data =
        [{ name: 'Home', path: 'home', icon: <HomeIcon /> },
        { name: 'Users', path: 'users', icon: <PersonIcon /> },
        { name: 'Losen Devices', path: 'lostdevices', icon: <MobileOffIcon /> },
        { name: 'Found Devices', path: 'founddevices', icon: <MobileFriendlyIcon /> }]

    const List2Data =
        [{ name: 'All mail', path: 'allmails', icon: <MailIcon /> },
        { name: 'Settings', path: 'settings', icon: <SettingsIcon /> }
        ]

    const redirect = (path) => {
        dispatch(setActiveDrawerList(path))
        navigate(`/${path}`)
    }
    return (
        <Box>
            <List>
                {List1Data.map((item, index) => (
                    <ListItem key={index} disablePadding
                        sx={{ display: 'block' }}
                        onClick={() => redirect(item.path)}


                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: state?.isDrawerOpen ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: state.active == item.path ? theme.palette.primary.main : null,
                                color: state.active == item.path ? 'white' : null,
                                m: 1,
                                borderRadius: 1.5,
                                border: 1,
                                borderColor: 'gray',
                                ":hover": {
                                    backgroundColor: state.active == item.path ? theme.palette.primary.dark : null
                                }
                            }}

                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: state?.isDrawerOpen ? 3 : 'auto',
                                    color: state.active == item.path ? 'white' : null,
                                    justifyContent: 'center',

                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: state?.isDrawerOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {List2Data.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}
                        onClick={() => redirect(item.path)}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: state?.isDrawerOpen ? 'initial' : 'center',
                                backgroundColor: state.active == item.path ? theme.palette.primary.main : null,
                                color: state.active == item.path ? 'white' : 'black',
                                px: 2.5,
                                m: 1,
                                borderRadius: 1.5,
                                border: 1,
                                ":hover": {
                                    backgroundColor: state.active == item.path && theme.palette.primary.dark
                                }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: state?.isDrawerOpen ? 3 : 'auto',
                                    color: state.active == item.path ? 'white' : null,
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: state?.isDrawerOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    )
}