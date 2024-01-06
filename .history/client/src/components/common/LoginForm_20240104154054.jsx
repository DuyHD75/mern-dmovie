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
     const [isLoading, setIsLoading] = useState(false);
     const [errorMessage, setErrorMessage] = useState();


     const loginForm = useFormik({
          initialValues: {
               password: "",
               username: ""
          },
          validationSchema: Yup.object({
               username: Yup.string()
                    .min(8, "username minimum 8 characters")
                    .required("username is required"),
               password: Yup.string()
                    .min(8, "password minimum 8 characters")
                    .required("password is required")
          }),
          onSubmit: async values => {
               setErrorMessage(undefined);
               setIsLoading(true);
               const { response, err } = await userApi.signin(values);

               setIsLoading(false);
               if (response) {
                    loginForm.resetForm();
                    dispatch(setUser(response));
                    dispatch(setAuthModalOpen(false));
                    toast.success("Login Successfully !");
               }
               if (err) setErrorMessage(err.message);
          }
     })


     return (
          <Box component={"form"} onSubmit={loginForm.handleSubmit} >
               <Stack spacing={3}>
                    <TextField type='text' variant='standard' label="Username" placeholder='Enter your username ...'
                         fullWidth value={loginForm.initialValues.username} onChange={loginForm.value.user}
                    >
                    </TextField>
                    <TextField type='text' variant='standard' label="Username" placeholder='Enter your username ...'
                         fullWidth value={loginForm.initialValues.username}
                    >
                    </TextField>
               </Stack>
          </Box>
     )
}

export default LoginForm;