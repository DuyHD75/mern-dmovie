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

     const sigupForm = useFormik({
          initialValues: {
               
          }
     })


     return (
          <Box component={"form"} onSubmit={sigupForm.handleSubmit} >
               <Stack spacing={3}>

                    <TextField type='text' placeholder='Enter your username' name='username'
                         fullWidth value={sigupForm.values.username} onChange={sigupForm.handleChange} color='success'
                         error={sigupForm.touched.username && sigupForm.errors.username !== undefined}
                         helperText={sigupForm.touched.username && sigupForm.errors.username}
                    >
                    </TextField>

                    <TextField type='password' placeholder='Enter your password' name='password'
                         fullWidth value={sigupForm.values.password} onChange={sigupForm.handleChange} color='success'
                         error={sigupForm.touched.password && sigupForm.errors.password !== undefined}
                         helperText={sigupForm.touched.password && sigupForm.errors.password}
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
