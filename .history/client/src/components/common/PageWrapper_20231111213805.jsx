import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const PageWrapper = ({state, children}) => {

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(setA)
     })

     return (
          <div>

          </div>
     )
}

export default PageWrapper;
