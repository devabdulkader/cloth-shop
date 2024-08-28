import { toggleSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";

const UserSidebarToggler: React.FC = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleToggleSidebar}
    >
      <AiOutlineUser className="text-3xl" />
    </div>
  );
};

export default UserSidebarToggler;
