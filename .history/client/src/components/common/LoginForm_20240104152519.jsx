import React from 'react'
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import { setUser } from '../../redux/features/userSlice';

const LoginForm = ({ switchAuthState }) => {

     const dispatch = useDispatch();
     use




     return (
          <div>
               LoginForm
          </div>
     )
}

export default LoginForm;