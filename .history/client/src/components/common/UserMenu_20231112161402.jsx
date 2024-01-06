import React from 'react'
import LogoutOutlineIcon from '@mui/icons-material/LogoutOutlined';
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import menuConfigs from '../../configs/menu.config';
import { setUser } from "../../redux/features/authModalSlice"



const UserMenu = () => {

     const { user } = useSelector((state) => state.user);


     const dispatch = useDispatch();


     const [anchorEl, setAnchorEl] = useState(null);

     const toggleMenu = (e) => setAnchorEl(e.currentTarget)

     return (
          <div>
               {user && (
                    <div>
                         <Typography
                              variant='h6'
                              sx={{ cursor: "pointer", useSelector: "none" }}
                              onClick={toggleMenu}
                         >
                              {user.displayName}
                         </Typography>
                         <Menu
                              open={Boolean(anchorEl)}
                              anchorEl={anchorEl}
                              onClick={() => setAnchorEl(null)}
                              PaperProps={{ sx: { padding: 0 } }}
                         >
                              {menuConfigs.user.map((item, index) => (
                                   <ListItemButton
                                        key={index}
                                        component={Link}
                                        to={item.path}
                                        onClick={() => setAnchorEl(null)}
                                   >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText disableTypography primary={
                                             <Typography
                                                  textTransform="uppercase"
                                             >
                                                  {item.display}
                                             </Typography>
                                        } />
                                   </ListItemButton>
                              ))}
                              <ListItemButton
                                   sx={{ borderRadius: '10px' }}
                                   onClick={() => dispatch(setUser(null))}
                              >
                                   <ListItemIcon>
                                        <LogoutOutlineIcon />
                                   </ListItemIcon>
                                   <ListItemText 
                                        disableTypography
                                        primary={
                                             
                                        }
                                   
                                   />


                              </ListItemButton>
                         </Menu>
                    </div>
               )}
          </div>
     );
};

export default UserMenu;