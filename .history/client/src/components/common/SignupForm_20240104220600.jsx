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
     const [isSignUpRequest, setIsSignUpRequest] = useState();
     const [errorMessage, setErrorMessage] = useState();

     const signupForm = useFormik({
          initialValues: {
               
          }
     })


     return (
          <Box component={"form"} onSubmit={signupForm.handleSubmit} >
               <Stack spacing={3}>

                    <TextField type='text' placeholder='Enter your username' name='username'
                         fullWidth value={signupForm.values.username} onChange={signupForm.handleChange} color='success'
                         error={signupForm.touched.username && signupForm.errors.username !== undefined}
                         helperText={signupForm.touched.username && signupForm.errors.username}
                    >
                    </TextField>

                    <TextField type='password' placeholder='Enter your password' name='password'
                         fullWidth value={signupForm.values.password} onChange={signupForm.handleChange} color='success'
                         error={signupForm.touched.password && signupForm.errors.password !== undefined}
                         helperText={signupForm.touched.password && signupForm.errors.password}
                    >
                    </TextField>

               </Stack>
               <LoadingButton
                    type='submit'
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ marginTop: 4 }}
                    loading={isSignUpRequest}
               >
                    Sign Up
               </LoadingButton>

               <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()} >
                    Log In
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