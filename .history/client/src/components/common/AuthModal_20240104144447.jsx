import {Box, Modal} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import Logo from './Logo';


const actionState = {
  login: "login", 
  signup: "signup"
}

const AuthModal = () => {
  const {authModalOpen} = useSelector((state) => state.authModal);









  return (
    <div>
      
    </div>
  )
}

export default AuthModal
