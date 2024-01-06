import React from 'react'
import { useSelector } from 'react-redux';

const GlobalLoading = () => {

     const { } = useSelector((state) => state.globalLoading);

     return (
          <div>
               GlobalLoading
          </div>
     )
}

export default GlobalLoading
