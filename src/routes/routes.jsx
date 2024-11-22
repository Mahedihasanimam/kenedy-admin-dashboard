import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Dashboardmain from './../pages/Dashboardmain';
import Notification from './../components/Notification';
import PropertyListings from '../components/PropertyListings';
import CategoryManagement from '../components/CategoryManagement';
import ManageUsers from '../components/ManageUsers';
import UserProfile from '../components/UserProfile';
import Transactions from '../components/Transactions';

import ManageBooking from '../components/ManageBooking';
import Login from '../components/LayoutsComponents/Login';
import Forgetpasswrod from '../components/Forgetpasswrod';
import OTPverification from '../components/OTPverification';
import EditContent from './../components/editcontent/EditContent';
import Personalinfo from '../components/personalinfo';
import Security from '../components/Security';
import MakeAdmin from '../components/LayoutsComponents/MakeAdmin';
import AddBooks from '../components/LayoutsComponents/AddBooks';



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
        path: "/CategoryManagement",
        element: <CategoryManagement></CategoryManagement>,
      },
      {
        path: "/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/transactions",
        element: <Transactions/>
      },
      {
        path: "/user/:userId",
        element:<UserProfile/>
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
        path: "/bookingmanagement",
        element:<ManageBooking/>
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