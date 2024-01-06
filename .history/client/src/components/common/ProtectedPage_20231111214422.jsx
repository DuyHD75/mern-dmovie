import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProtectedPage = () => {

     const dispatch = useDispatch();

     const { } = useSelector((state) => state.user)


     useEffect(() => {
       first
     
       return () => {
         second
       }
     }, [third])
     


     return (
          <div>

          </div>
     )
}

export default ProtectedPage
