import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setAppState
const PageWrapper = ({state, children}) => {

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(setAppState)
     })

     return (
          <div>

          </div>
     )
}

export default PageWrapper;
