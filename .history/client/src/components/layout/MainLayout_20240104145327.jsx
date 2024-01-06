import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from '../common/GlobalLoading';
import Footer from "../common/Footer"
import Topbar from "../common/Topbar"
import AuthModal from "../common/AuthModal";



const MainLayout = () => {
     // const dispatch = useDispatch();

     // const { user } = useSelector((state) => state.user);

     // useEffect(() => {
     //      const authUser = async () => {
     //           const { response, err } = await userApi.getInfo();

     //           if (response) dispatch(setUser(response));
     //           if (err) dispatch(setUser(null));
     //      };

     //      authUser();
     // }, [dispatch]);

     // useEffect(() => {
     //      const getFavorites = async () => {
     //           const { response, err } = await favoriteApi.getList();

     //           if (response) dispatch(setListFavorites(response));
     //           if (err) toast.error(err.message);
     //      };

     //      if (user) getFavorites();
     //      if (!user) dispatch(setListFavorites([]));
     // }, [user, dispatch]);

     return (
          <div>
               {/* global loading */}
               <GlobalLoading />
               {/* global loading */}



               {/* login modal */}


               {/*  <AuthModal />*/}
               <AuthModal />
               {/* login modal */}

               <Box display="flex" minHeight="100vh">
                    {/* header */}
                    <Topbar />
                    {/* header */}

                    {/* main */}
                    <Box
                         component="main"
                         flexGrow={1}
                         overflow="hidden"
                         minHeight="100vh"
                    >
                         <Outlet />
                    </Box>
                    {/* main */}
               </Box>

               {/* footer */}
               <Footer />
               {/* footer */}
          </div>
     );
};

export default MainLayout;