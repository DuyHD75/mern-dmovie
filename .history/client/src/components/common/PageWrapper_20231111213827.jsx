import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {} from '../../redux/'
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
