import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import Logo from './Logo';


const actionState = {
  login: "login",
  signup: "signup"
}

const AuthModal = () => {
  const { authModalOpen } = useSelector((state) => state.authModal);

  const dispatch = useDispatch();

  const [action, setAction] = useState(actionState);


  useEffect(() => {
    if (authModalOpen) setAction(actionState.login);
  }, [authModalOpen]);


  const handleClose = () => dispatch(setAuthModalOpen(false))

  const switchAuthState =(state) => {}






  return (
    <div>
      AuthModal;
    </div>
  )
}

export default AuthModal
