import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProtectedPage = () => {

     const dispatch = useDispatch();

     const { } = useSelector((state) => state.user)


     useEffect(() => {
       
     }, [user, dispatch])
     


     return (
          <div>

          </div>
     )
}

export default ProtectedPage
