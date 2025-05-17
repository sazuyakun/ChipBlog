import { ArrowRight } from "lucide-react";
import MainLogo from "./MainLogo";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <MainLogo />
        <Link href="/admin" className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid shadow-white shadow-[-7px_7px_0px] transform transition-transform hover:scale-105">
          Get Started
          <ArrowRight size={20}/>
        </Link>
      </div>
      <div className="text-center my-10">
        <div className="text-5xl font-medium">{session ? `Hello ${session.user.name.split(" ")[0]}` : "Latest Blogs"}</div>
        <form
          className="flex justify-between md:max-w-[500px] max-w-[400px] scale-100 mx-auto mt-10 border shadow-[-7px_7px_0px]"
        >
          <input type="email" placeholder="Enter your email" className="outline-none pl-4 flex-1"/>
          <button
            className=" px-4 py-4 sm:px-8 active:bg-white active:text-black cursor-pointer hover:bg-gray-600"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
