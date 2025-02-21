import AboutUs from "../components/LayoutsComponents/AboutUs";
import AddBooks from "../components/LayoutsComponents/AddBooks";
import AddPodcast from "../components/LayoutsComponents/AddPodcast";
import ApprovedAffiliate from "../components/LayoutsComponents/AprrovedAffiliate";
import ConfessionApproval from "../components/LayoutsComponents/ConfessionApproval";
import CreateNewPassword from "../components/CreateNewPassword";
import Dashboardmain from "./../pages/Dashboardmain";
import EditContent from "./../components/editcontent/EditContent";
import FAQpage from "../components/LayoutsComponents/FAQpage";
import Forgetpasswrod from "../components/LayoutsComponents/Forgetpasswrod";
import Login from "../components/LayoutsComponents/Login";
import Main from "../layouts/Main";
import MakeAdmin from "../components/LayoutsComponents/MakeAdmin";
import ManageUsers from "../components/LayoutsComponents/ManageUsers";
import Notification from "./../components/Notification";
import OTPverification from "../components/OTPverification";
import Personalinfo from "../components/personalinfo";
import PrivateRoutes from "./PrivateRoutes";
import Security from "../components/Security";
import Subscription from "../components/LayoutsComponents/Subscription";
import TermsAndConDitions from "../components/LayoutsComponents/TermsAndConDitions";
import { createBrowserRouter } from "react-router-dom";

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
        element: (
          <PrivateRoutes>
            <Dashboardmain />
          </PrivateRoutes>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoutes>
            <Notification />
          </PrivateRoutes>
        ),
      },
      {
        path: "/makeadmin",
        element: (
          <PrivateRoutes>
            <MakeAdmin />
          </PrivateRoutes>
        ),
      },
      {
        path: "/affiliate",
        element: (
          <PrivateRoutes>
            <ApprovedAffiliate />
          </PrivateRoutes>
        ),
      },
      {
        path: "/confessions-approval",
        element: (
          <PrivateRoutes>
            <ConfessionApproval />
          </PrivateRoutes>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoutes>
            <Subscription />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-users",
        element: (
          <PrivateRoutes>
            <ManageUsers />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addbooks",
        element: <AddBooks />,
      },
      {
        path: "/addpodcast",
        element: (
          <PrivateRoutes>
            <AddPodcast />
          </PrivateRoutes>
        ),
      },
      {
        path: "/FAQ",
        element: (
          <PrivateRoutes>
            <FAQpage />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/termsandconditions",
        element: (
          <PrivateRoutes>
            <TermsAndConDitions />
          </PrivateRoutes>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <PrivateRoutes>
            <AboutUs />
          </PrivateRoutes>
        ),
      },

      {
        path: "/editcontent",
        element: (
          <PrivateRoutes>
            <EditContent />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/personalinfo",
        element: (
          <PrivateRoutes>
            <Personalinfo />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/personalinfo",
        element: (
          <PrivateRoutes>
            <Personalinfo />,
          </PrivateRoutes>
        ),
      },

      {
        path: "/security",
        element: (
          <PrivateRoutes>
            <Security />,
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <Forgetpasswrod />,
  },
  {
    path: "/otpverification",
    element: <OTPverification />,
  },
  {
    path: "/create-newPassword",
    element: <CreateNewPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
