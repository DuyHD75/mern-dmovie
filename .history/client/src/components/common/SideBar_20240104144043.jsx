import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import menuConfigs from '../../configs/menu.config';
import Logo from './Logo';
import uiConfigs from '../../configs/ui.configs'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlineIcon from '@mui/icons-material/WbSunnyOutlined';
import { themeModes } from '../../configs/them.config';
import { setThemeMode } from '../../redux/features/themeModeSlice';


const SideBar = ({ open, toggleSidebar }) => {

     const dispatch = useDispatch();
     const { user } = useSelector((state) => state.user);
     const { appState } = useSelector((state) => state.appState);
     const { themeMode } = useSelector((state) => state.themeMode);

     const sideBarWidth = uiConfigs.size.sideBarWidth;

     const onSwitchTheme = () => {
          const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
          dispatch(setThemeMode(theme));
     }

     const drawer = (
          <div>
               <Toolbar
                    sx={{ paddingY: "20px", color: "text.primary" }}
               >
                    <Stack
                         width="100%" direction="row" justifyContent="center"
                    >
                         <Logo />
                    </Stack>
               </Toolbar>
               <List
                    sx={{ paddingX: "30px" }}
               >
                    <Typography
                         variant='h6' marginBottom="20px"
                    >MENU</Typography>

                    {menuConfigs.main.map((item, index) => (
                         <ListItemButton
                              key={index}
                              sx={{
                                   borderRadius: "10px",
                                   marginY: 1,
                                   backgroundColor: appState.includes(item.state) ? "primary.main" : "unset"
                              }}
                              component={Link}
                              to={item.path}
                              onClick={() => toggleSidebar(false)}
                         >
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText
                                   disableTypography
                                   primary={<Typography
                                        textTransform="uppercase"
                                   >{item.display}</Typography>}
                              />
                         </ListItemButton>
                    ))}
                    {user && (
                         <div>
                              <Typography
                                   variant='h6' marginBottom="20px"
                              >PERSONAL</Typography>
                              {menuConfigs.user.map((item, index) => (
                                   <ListItemButton
                                        key={index}
                                        sx={{
                                             borderRadius: "10px",
                                             marginY: 1,
                                             backgroundColor: appState.includes(item.state) ? "primary.main" : "unset"
                                        }}
                                        component={Link}
                                        to={item.path}
                                        onClick={() => toggleSidebar(false)}
                                   >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText
                                             disableTypography
                                             primary={<Typography
                                                  textTransform="uppercase"
                                             >{item.display}</Typography>}
                                        />
                                   </ListItemButton>
                              ))}
                         </div>
                    )}

                    <Typography
                         variant='h6' marginBottom="20px"
                    >THEME</Typography>

                    <ListItemButton onClick={onSwitchTheme}>
                         <ListItemIcon>
                              {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                              {themeMode === themeModes.light && <WbSunnyOutlineIcon />}
                         </ListItemIcon>
                         <ListItemText
                              disableTypography
                              primary={<Typography
                                   textTransform="uppercase"
                              >{themeMode === themeModes.dark ? "Dark Mode" : "Light Mode"}</Typography>}
                         />
                    </ListItemButton>
               </List>

          </div>
     );

     return (
          <Drawer
               open={open}
               onClose={() => toggleSidebar(false)}
               sx={{
                    "& .MuiDrawer_Paper": {
                         boxSizing: "border-box",
                         width: sideBarWidth,
                         borderRight: "0px"
                    }
               }}
          >
               {drawer}
          </Drawer>
     );
};

export default SideBar;
