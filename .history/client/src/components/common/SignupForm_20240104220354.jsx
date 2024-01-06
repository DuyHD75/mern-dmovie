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
          <Box component={"form"} onSubmit={si.handleSubmit} >
               <Stack spacing={3}>

                    <TextField type='text' placeholder='Enter your username' name='username'
                         fullWidth value={si.values.username} onChange={si.handleChange} color='success'
                         error={si.touched.username && si.errors.username !== undefined}
                         helperText={si.touched.username && si.errors.username}
                    >
                    </TextField>

                    <TextField type='password' placeholder='Enter your password' name='password'
                         fullWidth value={si.values.password} onChange={si.handleChange} color='success'
                         error={si.touched.password && si.errors.password !== undefined}
                         helperText={si.touched.password && si.errors.password}
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
