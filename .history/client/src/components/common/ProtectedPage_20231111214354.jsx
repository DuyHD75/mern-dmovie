import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProtectedPage = () => {

     const dispatch = useDispatch();

const {} = useSelector((state) => state.user)


  return (
    <div>
      
    </div>
  )
}

export default ProtectedPage
