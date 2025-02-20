import React from "react";
import { useApproveConfessionMutation, useCancelConfessionMutation, useGetAllConfessionsQuery } from "../../../redux/apiSlices/confessionApiSlice";

const ConfessionApproval = () => {
    const { data: confessionData } = useGetAllConfessionsQuery();
    const [approvedConfession] = useApproveConfessionMutation();
    const [cancelConfession] = useCancelConfessionMutation();
    
  return <div></div>;
};

export default ConfessionApproval;
