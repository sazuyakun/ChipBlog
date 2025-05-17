import MainLogo from "@/components/MainLogo";
import SignInButton from "@/components/Auth/SignInButton";

export default function SignIn(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <MainLogo />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <SignInButton />
      </div>
    </div>
  );
}
