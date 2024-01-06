import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAppState } from '../../redux/features/appStateSlice';

const PageWrapper = ({ state, children }) => {

     const dispatch = useDispatch();

     useEffect(() => {
          window.sc
          dispatch(setAppState(state))
     }, [state])

     return (
          children
     )
}

export default PageWrapper;
