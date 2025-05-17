'use client'

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut({ redirectTo: "/" });
    } catch (err) {
      console.log("SignOut Error: ", err);
    }
  };
  return (
    <button onClick={handleSignOut} className="cursor-pointer">
      <LogOut />
    </button>
  );
}
