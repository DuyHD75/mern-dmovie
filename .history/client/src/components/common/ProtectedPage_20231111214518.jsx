import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setAuthModalOpen} from "../../redux/features/authModalSlice"
const ProtectedPage = () => {

     const dispatch = useDispatch();

     const { user} = useSelector((state) => state.user)


     useEffect(() => {
       if(!user) dispatch(setAuthModalOpen)
     }, [user, dispatch])
     


     return (
          <div>

          </div>
     )
}

export default ProtectedPage