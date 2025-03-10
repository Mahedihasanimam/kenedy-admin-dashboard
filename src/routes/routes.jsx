import { createBrowserRouter } from "react-router-dom";
import CreateNewPassword from "../components/CreateNewPassword";
import AboutUs from "../components/LayoutsComponents/AboutUs";
import AddBooks from "../components/LayoutsComponents/AddBooks";
import AddPodcast from "../components/LayoutsComponents/AddPodcast";
import ApprovedAffiliate from "../components/LayoutsComponents/AprrovedAffiliate";
import ConfessionApproval from "../components/LayoutsComponents/ConfessionApproval";
import FAQpage from "../components/LayoutsComponents/FAQpage";
import Forgetpasswrod from "../components/LayoutsComponents/Forgetpasswrod";
import Login from "../components/LayoutsComponents/Login";
import MakeAdmin from "../components/LayoutsComponents/MakeAdmin";
import ManageUsers from "../components/LayoutsComponents/ManageUsers";
import StoriesApproval from "../components/LayoutsComponents/RideShareStories";
import Subscription from "../components/LayoutsComponents/Subscription";
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
        path: "/ride-stories-approval",
        element: (
          <PrivateRoutes>
            <StoriesApproval />
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
