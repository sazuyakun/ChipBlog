import Sidebar from "@/components/AdminComponents/Sidebar";
import { CircleUser } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-7 max-h-[60px] px-12 border-b">
            <h3 className="font-medium">Admin Panel</h3>
            <CircleUser />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
