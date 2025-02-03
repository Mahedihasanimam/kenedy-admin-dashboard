import { createBrowserRouter } from "react-router-dom";
import Forgetpasswrod from "../components/Forgetpasswrod";
import AboutUs from "../components/LayoutsComponents/AboutUs";
import AddBooks from "../components/LayoutsComponents/AddBooks";
import AddPodcast from "../components/LayoutsComponents/AddPodcast";
import FAQpage from "../components/LayoutsComponents/FAQpage";
import Login from "../components/LayoutsComponents/Login";
import MakeAdmin from "../components/LayoutsComponents/MakeAdmin";
import TermsAndConDitions from "../components/LayoutsComponents/TermsAndConDitions";
import OTPverification from "../components/OTPverification";
import Personalinfo from "../components/personalinfo";
import Security from "../components/Security";
import Main from "../layouts/Main";
import EditContent from "./../components/editcontent/EditContent";
import Notification from "./../components/Notification";
import Dashboardmain from "./../pages/Dashboardmain";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Main />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Dashboardmain></Dashboardmain>,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/makeadmin",
        element: <MakeAdmin />,
      },
      {
        path: "/addbooks",
        element: <AddBooks />,
      },
      {
        path: "/addpodcast",
        element: <AddPodcast />,
      },
      {
        path: "/FAQ",
        element: <FAQpage />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConDitions />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      {
        path: "/editcontent",
        element: <EditContent />,
      },
      {
        path: "/personalinfo",
        element: <Personalinfo />,
      },
      {
        path: "/personalinfo",
        element: <Personalinfo />,
      },

      {
        path: "/security",
        element: <Security />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <Forgetpasswrod />,
      },
      {
        path: "/otpverification",
        element: <OTPverification />,
      },
    ],
  },
]);

export default router;
