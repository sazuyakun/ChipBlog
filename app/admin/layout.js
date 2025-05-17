import Sidebar from "@/components/AdminComponents/Sidebar";
import SignOutButton from "@/components/Auth/SignOutButton";
import { CircleUser } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

export default async function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-7 max-h-[60px] px-12 border-b">
            <h3 className="font-medium">Admin Panel</h3>
            <div className="flex gap-2">
              <CircleUser />
              <SignOutButton />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
