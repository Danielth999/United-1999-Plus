"use client";
import Sidebar from "../../components/admin-dashboard/Sidebar";

const AdminLayout = ({ children }) => {
  return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
