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




const SignupForm = ({ switchAuthState }) => {

     const dispatch = useDispatch();
     const [isSignUpRequest, setIsSignUpRequest] = useState(second
     const [errorMessage, setErrorMessage] = useState();



    return (
          <Box component={"form"} onSubmit={loginForm.handleSubmit} >
               <Stack spacing={3}>

                    <TextField type='text' placeholder='Enter your username' name='username'
                         fullWidth value={loginForm.values.username} onChange={loginForm.handleChange} color='success'
                         error={loginForm.touched.username && loginForm.errors.username !== undefined}
                         helperText={loginForm.touched.username && loginForm.errors.username}
                    >
                    </TextField>

                    <TextField type='password' placeholder='Enter your password' name='password'
                         fullWidth value={loginForm.values.password} onChange={loginForm.handleChange} color='success'
                         error={loginForm.touched.password && loginForm.errors.password !== undefined}
                         helperText={loginForm.touched.password && loginForm.errors.password}
                    >
                    </TextField>

               </Stack>
               <LoadingButton
                    type='submit'
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ marginTop: 4 }}
                    loading={isLoginRequest}
               >
                    Login
               </LoadingButton>

               <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()} >
                    SignUp
               </Button>

               {errorMessage && (
                    <Box sx={{ marginTop: 2 }}>
                         <Alert severity='error' variant='outlined'>{errorMessage}</Alert>
                    </Box>
               )}

          </Box>
     )
}

export default SignupForm
