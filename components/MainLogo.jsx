import { Bird } from "lucide-react";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/">
      <div className="flex gap-2 sm:w-auto justify-center items-center cursor-pointer">
        <Bird size="36px" />
        <span className="hidden md:inline font-medium text-xl">ChipBlog</span>
      </div>
    </Link>
  );
}
