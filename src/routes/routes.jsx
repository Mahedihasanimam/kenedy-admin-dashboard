import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Dashboardmain from './../pages/Dashboardmain';
import Notification from './../components/Notification';


import ManageUsers from '../components/ManageUsers';




import Login from '../components/LayoutsComponents/Login';
import Forgetpasswrod from '../components/Forgetpasswrod';
import OTPverification from '../components/OTPverification';
import EditContent from './../components/editcontent/EditContent';
import Personalinfo from '../components/personalinfo';
import Security from '../components/Security';
import MakeAdmin from '../components/LayoutsComponents/MakeAdmin';
import AddBooks from '../components/LayoutsComponents/AddBooks';
import AddPodcast from '../components/LayoutsComponents/AddPodcast';
import FAQpage from '../components/LayoutsComponents/FAQpage';
import TermsAndConDitions from '../components/LayoutsComponents/TermsAndConDitions';
import AboutUs from '../components/LayoutsComponents/AboutUs';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboardmain></Dashboardmain>,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
      {
        path: "/makeadmin",
        element: <MakeAdmin/>,
      },
      {
        path: "/addbooks",
        element: <AddBooks/>,
      },
      {
        path: "/addpodcast",
        element: <AddPodcast/>,
      },
      {
        path: "/FAQ",
        element: <FAQpage/>,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConDitions/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
    
      {
        path: "/editcontent",
        element:<EditContent/>
      },
      {
        path: "/personalinfo",
        element:<Personalinfo/>
      },
      {
        path: "/personalinfo",
        element:<Personalinfo/>
      },
     
      {
        path: "/security",
        element:<Security/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/forgot-password",
        element:<Forgetpasswrod/>
      },
      {
        path: "/otpverification",
        element:<OTPverification/>
      },
    ]
  },

]);

export default router;