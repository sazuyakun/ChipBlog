import { Bird } from "lucide-react";
import MainLogo from "./MainLogo";
import SocialIcon from "./socials/SocialIcon";

export default function Footer() {
  return (
    <div className="flex justify-around flex-col gap-3 sm:gap-0 sm:flex-row py-5 items-center border-t">
      <MainLogo />
      <p className="text-sm">All rights reserved. Copyright @ChipBlog</p>
      <div className="flex gap-1 cursor-pointer">
        <SocialIcon type="facebook" size={28} color={"white"} />
        <SocialIcon type="google" size={28} color={"white"} />
        <SocialIcon type="twitter" size={28} color={"white"} />
      </div>
    </div>
  );
}
