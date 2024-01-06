import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProtectedPage = () => {

     const dispatch = useDispatch();

     const { } = useSelector((state) => state.user)


     useEffect(() => {
       if(!user) dispatch(setAuth)
     }, [user, dispatch])
     


     return (
          <div>

          </div>
     )
}

export default ProtectedPage
