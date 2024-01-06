import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAppState } from '../../redux/features/appStateSlice';

const PageWrapper = ({ state, children }) => {

     const dispatch = useDispatch();
     dispatch(setAppState)
     useEffect(() => {
          window.scrollTo(0, 0)
         
     }, [state])

     return (
          children
     );
};

export default PageWrapper;
