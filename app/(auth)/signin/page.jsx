'use client'

import MainLogo from "@/components/MainLogo";
import SocialIcon from "@/components/socials/SocialIcon";
import { signIn } from "next-auth/react"
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SignIn(){
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { redirectTo: "/" })
    } catch (err) {
      console.log("Authentication Error: ", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <MainLogo />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="group relative flex w-full justify-center items-center gap-3 border border-solid py-3 px-4 text-sm font-medium shadow-white shadow-[-7px_7px_0px] transform transition-transform hover:scale-105 cursor-pointer"
          >
            <SocialIcon type="google" color="white"/>
            {isLoading ? "Signing in..." : (
                <div className="flex items-center">
                  Sign in with google
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
