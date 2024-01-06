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
          <>
               {user && (
                    <>
                         <Typography
                              variant='h6'
                              sx={{ cursor: "pointer", useSelector: "none" }}
                              onClick={toggleMenu}

                         ></Typography>
                    </>
               )}
          </>
     );
};

export default UserMenu;