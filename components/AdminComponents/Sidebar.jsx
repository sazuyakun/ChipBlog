import { CirclePlus } from "lucide-react";
import MainLogo from "../MainLogo";
import { Mail } from "lucide-react";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-800">
      <div className="px-2 sm:pl-14 py-3 border">
        <MainLogo />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href='/admin/addProduct' className="flex bg-slate-800 items-center border gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px] transform transition-transform hover:scale-105 duration-300 cursor-pointer">
            <CirclePlus />
            <p>Add Blogs</p>
          </Link>
          <Link href='/admin/blogList' className="flex mt-5 bg-slate-800 items-center border gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px] transform transition-transform hover:scale-105 duration-300 cursor-pointer">
            <PenBox />
            <p>Blog List</p>
          </Link>
          <Link href='/admin/subscriptions' className="flex mt-5 bg-slate-800 items-center border gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px] transform transition-transform hover:scale-105 duration-300 cursor-pointer">
            <Mail />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
